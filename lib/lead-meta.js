import crypto from 'node:crypto';

function sha256(value) {
  return crypto.createHash('sha256').update(String(value).trim().toLowerCase()).digest('hex');
}

export async function sendMetaLeadEvent({ eventName, eventId, lead, request }) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const isPlaceholder = (value) => /YOUR_|example|placeholder|xxxxx|undefined|\*{4}/i.test(value || '');
  if (!pixelId || !accessToken || isPlaceholder(pixelId) || isPlaceholder(accessToken)) {
    return { configured: false };
  }

  const userData = {};
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip');
  const userAgent = request.headers.get('user-agent');
  if (lead.email) userData.em = [sha256(lead.email)];
  if (lead.phoneNormalized) userData.ph = [sha256(lead.phoneNormalized.replace(/\D/g, ''))];
  if (ip) userData.client_ip_address = ip;
  if (userAgent) userData.client_user_agent = userAgent;
  if (lead.firstTouch?.fbp) userData.fbp = lead.firstTouch.fbp;
  if (lead.firstTouch?.fbc) userData.fbc = lead.firstTouch.fbc;

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: 'website',
    event_source_url: lead.firstTouch?.landingUrl || process.env.NEXT_PUBLIC_SITE_URL,
    user_data: userData,
    custom_data: { segment: lead.segment },
  };
  if (process.env.META_TEST_EVENT_CODE) event.test_event_code = process.env.META_TEST_EVENT_CODE;

  try {
    const response = await fetch(`https://graph.facebook.com/v22.0/${encodeURIComponent(pixelId)}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [event], access_token: accessToken }),
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return { configured: true, sent: false };
    return { configured: true, sent: true };
  } catch {
    return { configured: true, sent: false };
  }
}
