import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getMongoDb, ensureLeadIndexes } from '@/lib/mongodb';
import { createLeadUpdateToken } from '@/lib/lead-token';
import { checkLeadRateLimit, getClientIp } from '@/lib/lead-rate-limit';
import { sendLeadNotification } from '@/lib/lead-email';
import { sendMetaLeadEvent } from '@/lib/lead-meta';
import {
  getAgencyMargin,
  getLeadScore,
  getLeadStatusFromTemperature,
  getTemperatureFromScore,
  normalizePhoneNumber,
  sanitizeText,
} from '@/lib/lead-utils';

const commonAnswersSchema = {
  name: z.string().max(60).optional(),
  whatsapp: z.string().max(30).optional(),
  email: z.string().email().max(160).optional().or(z.literal('')),
  consent: z.boolean().optional(),
  website_hp: z.string().max(500).optional(),
};

const agencyAnswersSchema = z.object({
  projectVolume: z.enum(['1–2', '3–5', '6–10', '10+', 'Not started yet']),
  currentBuilder: z.enum(['In-house', 'Freelancers', 'Another agency', 'Nobody yet']),
  ...commonAnswersSchema,
});

const businessAnswersSchema = z.object({
  businessType: z.enum(['Retail / E-commerce', 'Restaurant / Café', 'Clinic / Healthcare', 'Education / Coaching', 'Real estate', 'Local services', 'Manufacturing / B2B', 'Other']),
  needs: z.array(z.enum(['Website', 'Mobile app', 'Social media', 'Performance marketing / Ads', 'Creatives & content', 'Complete package', 'Not sure'])).min(1),
  businessName: z.string().max(120).optional(),
  ...commonAnswersSchema,
});

const talentAnswersSchema = z.object({
  role: z.enum(['Video editor', 'Graphic designer', 'Developer', 'Social media / Content', 'Sales / Calling', 'Other']),
  ...commonAnswersSchema,
});

const otherAnswersSchema = z.object({
  otherDetails: z.string().min(3).max(1200),
  ...commonAnswersSchema,
});

const attributionFields = {
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  fbclid: z.string().max(1000).optional(),
  fbp: z.string().max(200).optional(),
  fbc: z.string().max(200).optional(),
  landingUrl: z.string().max(2000).optional(),
  referrer: z.string().max(2000).optional(),
  sessionId: z.string().max(128).optional(),
  landingVariant: z.string().max(80).optional(),
  device: z.string().max(80).optional(),
  src: z.string().max(100).optional(),
  cid: z.string().max(200).optional(),
};

const attributionTouchSchema = z.object(attributionFields);

const leadSchema = z.object({
  segment: z.enum(['agency', 'business', 'talent', 'other']),
  name: z.string().min(2).max(60),
  businessName: z.string().max(120).optional(),
  whatsapp: z.string().max(30).optional().default(''),
  email: z.string().email().max(160).optional().or(z.literal('')),
  consent: z.boolean().optional().default(false),
  website_hp: z.string().max(500).optional().default(''),
  sessionId: z.string().min(1).max(128).optional(),
  eventId: z.string().min(8).max(120).regex(/^[A-Za-z0-9._:-]+$/).optional(),
  attribution: z.object({
    ...attributionFields,
    firstTouch: attributionTouchSchema.optional(),
    lastTouch: attributionTouchSchema.optional(),
  }).optional(),
  answers: z.record(z.unknown()).default({}),
}).superRefine((data, context) => {
  if (['agency', 'business'].includes(data.segment) && sanitizeText(data.businessName || '', 120).length < 2) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['businessName'],
      message: 'Please enter your business name.',
    });
  }
});

function validateSegmentAnswers(segment, answers) {
  if (segment === 'agency') return agencyAnswersSchema.safeParse(answers);
  if (segment === 'business') return businessAnswersSchema.safeParse(answers);
  if (segment === 'talent') return talentAnswersSchema.safeParse(answers);
  return otherAnswersSchema.safeParse(answers);
}

function escapeClientError() {
  return NextResponse.json({ error: 'Unable to submit your enquiry right now.' }, { status: 500 });
}

function createLeadReference() {
  return `L-${crypto.randomBytes(6).toString('base64url').toUpperCase()}`;
}

function sanitizeTrackingUrl(value) {
  if (!value) return undefined;
  try {
    const url = new URL(value);
    for (const key of [...url.searchParams.keys()]) {
      if (/(name|email|phone|mobile|whatsapp|token|password|leadref)/i.test(key)) {
        url.searchParams.delete(key);
      }
    }
    url.hash = '';
    return url.toString();
  } catch {
    return undefined;
  }
}

function buildTouch(attribution = {}, data, ip, userAgent, now) {
  return {
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_content: attribution.utm_content,
    utm_term: attribution.utm_term,
    fbclid: attribution.fbclid,
    fbp: attribution.fbp,
    fbc: attribution.fbc,
    landingUrl: sanitizeTrackingUrl(attribution.landingUrl),
    referrer: sanitizeTrackingUrl(attribution.referrer),
    sessionId: attribution.sessionId || data.sessionId,
    landingVariant: attribution.landingVariant || data.segment,
    device: attribution.device,
    src: attribution.src,
    cid: attribution.cid,
    ip,
    userAgent,
    at: now,
  };
}

function calculateLead(data) {
  const scoreInput = getLeadScore(data.segment, data.answers);
  const temperature = scoreInput.score === null ? null : getTemperatureFromScore(data.segment, scoreInput.score);
  let calc = {};

  if (data.segment === 'agency') {
    calc = {
      margin: getAgencyMargin({ projectVolume: data.answers.projectVolume }),
    };
  }

  return {
    score: scoreInput.score,
    scoreReasons: scoreInput.reasons,
    temperature,
    status: getLeadStatusFromTemperature(temperature),
    calc,
  };
}

async function writeEvent(events, event) {
  try {
    await events.insertOne(event);
  } catch (error) {
    console.error('Lead event write failed', { code: error?.code || 'unknown' });
  }
}

async function updateAlertStatus(db, lead, fields) {
  try {
    await db.collection('leads').updateOne(
      { leadRef: lead.leadRef },
      { $set: fields }
    );
  } catch (error) {
    console.error('Lead alert status update failed', { leadRef: lead.leadRef, errorName: error?.name || 'unknown' });
  }
}

async function notifyLead({ db, events, lead, alertType }) {
  const attemptedAt = new Date();
  let result;
  try {
    result = await sendLeadNotification(lead, alertType);
  } catch (error) {
    await updateAlertStatus(db, lead, {
      alertFailed: true,
      lastAlertAttemptAt: attemptedAt,
      lastAlertType: alertType,
    });
    await writeEvent(events, {
      leadRef: lead.leadRef,
      sessionId: lead.lastTouch?.sessionId || null,
      type: 'email_failed',
      step: 'notification',
      segment: lead.segment,
      meta: { alertType, reason: error?.name || 'send_failed', attempts: 3 },
      at: attemptedAt,
    });
    console.error('Lead notification failed', { leadRef: lead.leadRef, errorName: error?.name || 'unknown' });
    return;
  }

  if (!result.configured) {
    await updateAlertStatus(db, lead, {
      alertFailed: true,
      lastAlertAttemptAt: attemptedAt,
      lastAlertType: alertType,
    });
    await writeEvent(events, {
      leadRef: lead.leadRef,
      sessionId: lead.lastTouch?.sessionId || null,
      type: 'email_failed',
      step: 'notification',
      segment: lead.segment,
      meta: { alertType, reason: 'smtp_not_configured', attempts: 0 },
      at: attemptedAt,
    });
    return;
  }

  const sentAt = new Date();
  await updateAlertStatus(db, lead, {
    alertSentAt: sentAt,
    alertFailed: false,
    lastAlertAttemptAt: attemptedAt,
    lastAlertType: alertType,
  });
  await writeEvent(events, {
    leadRef: lead.leadRef,
    sessionId: lead.lastTouch?.sessionId || null,
    type: 'email_sent',
    step: 'notification',
    segment: lead.segment,
    meta: { alertType, attempts: result.attempts },
    at: sentAt,
  });
}

async function recordConversions({ db, events, lead, eventIds, request }) {
  if (!['agency', 'business'].includes(lead.segment)) return;
  const conversionEvents = [{ type: 'Lead', eventId: eventIds.lead }];
  if (lead.temperature === 'hot' || lead.temperature === 'warm') {
    conversionEvents.push({ type: 'QualifiedLead', eventId: eventIds.qualified });
  }

  for (const conversion of conversionEvents) {
    await writeEvent(events, {
      eventId: conversion.eventId,
      leadRef: lead.leadRef,
      sessionId: lead.lastTouch?.sessionId || null,
      type: conversion.type,
      step: 'submission',
      segment: lead.segment,
      variant: lead.firstTouch?.landingVariant,
      meta: lead.segment === 'business' ? {} : { score: lead.score, temperature: lead.temperature },
      at: new Date(),
    });
    const result = await sendMetaLeadEvent({
      eventName: conversion.type,
      eventId: conversion.eventId,
      lead,
      request,
    });
    if (result.configured && !result.sent) {
      await writeEvent(events, {
        leadRef: lead.leadRef,
        sessionId: lead.lastTouch?.sessionId || null,
        type: 'meta_event_failed',
        step: conversion.type,
        segment: lead.segment,
        meta: { eventId: conversion.eventId },
        at: new Date(),
      });
    }
  }
}

async function handleReturningLead({ existing, data, calculated, touch, db, events, eventIds, request }) {
  const nextLead = await db.collection('leads').findOneAndUpdate(
    { _id: existing._id },
    {
      $set: {
        segment: data.segment,
        status: calculated.status,
        temperature: calculated.temperature,
        score: calculated.score,
        scoreReasons: calculated.scoreReasons,
        name: sanitizeText(data.name, 60),
        ...(['agency', 'business'].includes(data.segment) ? { businessName: data.businessName || existing.businessName || '' } : {}),
        whatsapp: sanitizeText(data.whatsapp, 30),
        email: data.email
          ? sanitizeText(data.email, 160)
          : data.segment === 'agency'
            ? existing.email || ''
            : '',
        answers: { ...(existing.answers || {}), ...data.answers },
        calc: calculated.calc,
        needs: Array.isArray(data.answers.needs) ? data.answers.needs : [],
        lastTouch: touch,
        updatedAt: touch.at,
        touchedAt: touch.at,
        multiTouch: true,
        callId: data.attribution?.cid || existing.callId || null,
      },
      $push: { touches: touch },
    },
    { returnDocument: 'after' }
  );
  const lead = nextLead || { ...existing, ...calculated, lastTouch: touch };

  await writeEvent(events, {
    leadRef: lead.leadRef,
    submissionId: data.eventId,
    sessionId: touch.sessionId || null,
    type: 'ReturningLead',
    step: 'existing_lead_update',
    segment: data.segment,
    variant: touch.landingVariant,
    meta: { score: calculated.score, temperature: calculated.temperature },
    at: touch.at,
  });
  recordConversions({ db, events, lead, eventIds, request }).catch((err) =>
    console.error('Background conversions failed', err?.message)
  );

  const alertType = ['agency', 'business'].includes(data.segment) ? 'Returning' : null;
  if (alertType) {
    notifyLead({ db, events, lead, alertType }).catch((err) =>
      console.error('Background lead alert failed', err?.message)
    );
  }
  return lead;
}

export async function POST(request) {
  try {
    const body = await request.json();
    if ((typeof body?.website_hp === 'string' && body.website_hp.trim())
      || (typeof body?.answers?.website_hp === 'string' && body.answers.website_hp.trim())) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      console.warn('Lead payload rejected', {
        paths: parsed.error.issues.map((issue) => issue.path.join('.')),
        codes: parsed.error.issues.map((issue) => issue.code),
      });
      return NextResponse.json({ error: 'Please check the information you entered.' }, { status: 400 });
    }

    const data = parsed.data;
    if (data.website_hp.trim() || (typeof data.answers.website_hp === 'string' && data.answers.website_hp.trim())) {
      return NextResponse.json({ success: true }, { status: 200 });
    }
    const answersResult = validateSegmentAnswers(data.segment, data.answers);
    if (!answersResult.success) {
      console.warn('Lead answers rejected', {
        segment: data.segment,
        paths: answersResult.error.issues.map((issue) => issue.path.join('.')),
        codes: answersResult.error.issues.map((issue) => issue.code),
      });
      return NextResponse.json({ error: 'Please complete all required questions.' }, { status: 400 });
    }
    data.answers = answersResult.data;
    const businessName = sanitizeText(data.businessName || '', 120);
    data.businessName = businessName;
    if (data.segment === 'other') {
      data.answers.otherDetails = sanitizeText(data.answers.otherDetails, 1200);
    }

    data.email = data.email || data.answers.email || '';
    data.whatsapp = data.whatsapp || data.answers.whatsapp || '';
    data.consent = Boolean(data.consent);
    const cleanName = sanitizeText(data.name, 60);
    if (cleanName.length < 2) {
      return NextResponse.json({ error: 'Please enter a valid name.' }, { status: 400 });
    }
    data.name = cleanName;
    data.email = data.email ? sanitizeText(data.email, 160).toLowerCase() : '';
    data.whatsapp = sanitizeText(data.whatsapp, 30);
    const phoneNormalized = data.whatsapp ? normalizePhoneNumber(data.whatsapp, '+91') : '';
    if (data.whatsapp && !phoneNormalized) {
      return NextResponse.json({ error: 'Please enter a valid Indian WhatsApp number.' }, { status: 400 });
    }
    if (['agency', 'business'].includes(data.segment) && (!phoneNormalized || !data.consent)) {
      return NextResponse.json({ error: 'WhatsApp and consent are required for this enquiry.' }, { status: 400 });
    }
    if (data.segment === 'talent' && !phoneNormalized && !data.email) {
      return NextResponse.json({ error: 'Add a WhatsApp number or email so we can contact you.' }, { status: 400 });
    }
    if (data.segment === 'other' && !phoneNormalized && !data.email) {
      return NextResponse.json({ error: 'Add a WhatsApp number or email so we can contact you.' }, { status: 400 });
    }
    data.answers.name = data.name;
    if (['agency', 'business'].includes(data.segment)) {
      data.answers.businessName = businessName;
    }
    data.answers.whatsapp = data.whatsapp;
    data.answers.email = data.email;
    data.answers.consent = data.consent;
    data.answers.website_hp = '';

    data.eventId = data.eventId || crypto.randomUUID();
    const ip = getClientIp(request);
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const now = new Date();
    const touch = buildTouch(data.attribution?.lastTouch || data.attribution, data, ip, userAgent, now);
    const calculated = calculateLead(data);
    const db = await getMongoDb();
    await ensureLeadIndexes();
    const permitted = await checkLeadRateLimit(db, {
      scope: 'lead_submission',
      key: ip,
      limit: 5,
      windowMs: 60 * 60 * 1000,
    });
    if (!permitted) return NextResponse.json({ error: 'Too many submissions. Please try again later.' }, { status: 429 });

    const events = db.collection('lead_events');
    const priorSubmission = await events.findOne({ submissionId: data.eventId });
    if (priorSubmission?.leadRef) {
      const priorWasQualified = ['hot', 'warm'].includes(priorSubmission.meta?.temperature);
      return NextResponse.json({
        success: true,
        leadRef: priorSubmission.leadRef,
        updateToken: createLeadUpdateToken(priorSubmission.leadRef),
        duplicateRequest: true,
        eventIds: ['agency', 'business'].includes(data.segment)
          ? { lead: `${data.eventId}-lead`, qualified: priorWasQualified ? `${data.eventId}-qualified` : null }
          : null,
      }, { status: 200 });
    }

    const firstTouch = data.attribution?.firstTouch
      ? buildTouch(data.attribution.firstTouch, data, ip, userAgent, now)
      : touch;
    const doc = {
      leadRef: createLeadReference(),
      segment: data.segment,
      status: calculated.status,
      temperature: calculated.temperature,
      score: calculated.score,
      scoreReasons: calculated.scoreReasons,
      name: data.name,
      ...(['agency', 'business'].includes(data.segment) ? { businessName } : {}),
      whatsapp: sanitizeText(data.whatsapp, 30),
      ...(phoneNormalized ? { phoneNormalized } : {}),
      email: data.email,
      consent: data.consent,
      answers: data.answers,
      calc: calculated.calc,
      needs: Array.isArray(data.answers.needs) ? data.answers.needs : [],
      firstTouch,
      lastTouch: touch,
      touches: [touch],
      multiTouch: false,
      callId: data.attribution?.cid || null,
      owner: null,
      nextFollowUpAt: null,
      tags: [],
      notes: [],
      junkReason: null,
      alertSentAt: null,
      alertFailed: false,
      firstContactedAt: null,
      createdAt: now,
      updatedAt: now,
    };

    let lead = null;
    const isReturning = false;
    const leads = db.collection('leads');
    for (let attempt = 0; attempt < 3 && !lead; attempt += 1) {
      try {
        await leads.insertOne(doc);
        lead = doc;
      } catch (error) {
        if (error?.code !== 11000) throw error;
        // Collision on unique leadRef, generate a new reference and retry
        doc.leadRef = createLeadReference();
      }
    }
    if (!lead) throw new Error('Could not generate a unique lead reference');

    const eventIds = { lead: `${data.eventId}-lead`, qualified: `${data.eventId}-qualified` };
    if (!isReturning) {
      await writeEvent(events, {
        leadRef: lead.leadRef,
        submissionId: data.eventId,
        sessionId: data.sessionId || null,
        type: 'lead_submitted',
        step: 'submission',
        segment: data.segment,
        variant: firstTouch.landingVariant,
        meta: data.segment === 'business' ? {} : { score: lead.score, temperature: lead.temperature },
        at: now,
      });
      // Fire conversions in background without blocking user response
      recordConversions({ db, events, lead, eventIds, request }).catch((err) =>
        console.error('Background conversions failed', err?.message)
      );
    }

    const alertType = isReturning
      ? 'Returning'
      : lead.temperature === 'hot'
        ? 'Hot'
        : lead.temperature === 'warm'
          ? 'Warm'
          : null;
    if (alertType && ['agency', 'business'].includes(data.segment)) {
      // Fire email notification in background without blocking user response
      notifyLead({ db, events, lead, alertType }).catch((err) =>
        console.error('Background lead alert failed', err?.message)
      );
    }

    return NextResponse.json({
      success: true,
      leadRef: lead.leadRef,
      updateToken: createLeadUpdateToken(lead.leadRef),
      isReturning,
      eventIds: ['agency', 'business'].includes(data.segment)
        ? { lead: eventIds.lead, qualified: ['hot', 'warm'].includes(lead.temperature) ? eventIds.qualified : null }
        : null,
    }, { status: 200 });
  } catch (error) {
    console.error('Lead submission failed', { errorName: error?.name || 'unknown', code: error?.code || 'unknown' });
    return escapeClientError();
  }
}
