import { NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { sendFollowUpReminderEmail } from '@/lib/lead-email';

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization') || '';
    const cronSecret = process.env.CRON_SECRET || process.env.PANEL_ADMIN_PASSWORD || 'bbs-cron-default-key';

    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    const querySecret = new URL(request.url).searchParams.get('secret');

    if (token !== cronSecret && querySecret !== cronSecret) {
      return NextResponse.json({ error: 'Unauthorized cron trigger' }, { status: 401 });
    }

    const db = await getMongoDb();
    const leadsCollection = db.collection('leads');
    const eventsCollection = db.collection('lead_events');

    // Leads where follow-up date has passed or is within the next 30 minutes
    const windowEnd = new Date(Date.now() + 30 * 60 * 1000);

    const candidates = await leadsCollection.find({
      nextFollowUpAt: { $ne: null, $lte: windowEnd },
    }).toArray();

    const results = {
      evaluated: candidates.length,
      sent: 0,
      skippedDuplicate: 0,
      failed: 0,
    };

    for (const lead of candidates) {
      const scheduledFollowUpIso = new Date(lead.nextFollowUpAt).toISOString();

      // Duplicate prevention: If a reminder was already sent for this specific scheduled timestamp
      if (lead.lastReminderSentFor === scheduledFollowUpIso) {
        results.skippedDuplicate += 1;
        continue;
      }

      const emailResult = await sendFollowUpReminderEmail(lead);

      if (emailResult.sent) {
        results.sent += 1;

        // Record reminder in lead document
        await leadsCollection.updateOne(
          { _id: lead._id },
          {
            $set: {
              lastReminderSentFor: scheduledFollowUpIso,
              lastReminderSentAt: new Date(),
            },
          }
        );

        // Record event in timeline
        await eventsCollection.insertOne({
          leadRef: lead.leadRef,
          type: 'followup_reminder_sent',
          step: 'notification',
          meta: {
            scheduledFor: scheduledFollowUpIso,
            recipientCount: emailResult.configured ? 'smtp_configured' : 'unconfigured',
          },
          at: new Date(),
        });
      } else {
        results.failed += 1;
      }
    }

    return NextResponse.json({
      ok: true,
      timestamp: new Date().toISOString(),
      results,
    });
  } catch (error) {
    console.error('Follow-up cron job execution failed:', error);
    return NextResponse.json({ error: 'Cron execution failure' }, { status: 500 });
  }
}

