import nodemailer from 'nodemailer';

const RETRY_DELAYS = [250, 500];

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.ALERT_FROM || user;
  const recipients = (process.env.ALERT_TO || '').split(',').map((email) => email.trim()).filter(Boolean);

  if (!host || !Number.isInteger(port) || !user || !pass || !from || recipients.length === 0) {
    return null;
  }
  return { host, port, user, pass, from, recipients };
}

function buildMessage(lead, alertType) {
  const rows = [
    ['Lead reference', lead.leadRef],
    ['Alert type', alertType],
    ['Name', lead.name],
    ['Segment', lead.segment],
    ['Score', lead.score ?? 'Not scored'],
    ['Score reasons', lead.scoreReasons?.join(', ') || 'Not scored'],
    ['WhatsApp', lead.whatsapp || 'Not provided'],
    ['Email', lead.email || 'Not provided'],
    ['Answers', JSON.stringify(lead.answers || {}, null, 2)],
    ['Attribution', JSON.stringify({ firstTouch: lead.firstTouch, lastTouch: lead.lastTouch }, null, 2)],
  ];
  const html = `<h2>${escapeHtml(alertType)} lead</h2><table>${rows.map(([label, value]) => `<tr><th align="left" valign="top">${escapeHtml(label)}</th><td><pre style="white-space:pre-wrap">${escapeHtml(value)}</pre></td></tr>`).join('')}</table>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n\n');
  return { subject: `[BBS] ${alertType} lead ${lead.leadRef}`, html, text };
}

export async function sendLeadNotification(lead, alertType) {
  const config = getSmtpConfig();
  if (!config) return { configured: false, attempts: 0 };

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 8000,
  });
  const message = buildMessage(lead, alertType);

  try {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        await transporter.sendMail({
          from: config.from,
          to: config.recipients,
          ...message,
        });
        return { configured: true, attempts: attempt + 1 };
      } catch (error) {
        if (attempt === 2) throw error;
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAYS[attempt]));
      }
    }
    return { configured: true, attempts: 3 };
  } finally {
    transporter.close();
  }
}

export async function sendFollowUpReminderEmail(lead) {
  const config = getSmtpConfig();
  if (!config) return { configured: false, attempts: 0 };

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://buildbeyondstudio.com';
  const leadDetailUrl = `${siteUrl}/panel/leads/${encodeURIComponent(lead.leadRef)}`;
  const followUpFormatted = lead.nextFollowUpAt
    ? new Date(lead.nextFollowUpAt).toLocaleString()
    : 'Scheduled Date Unknown';

  const subject = `[Follow-up Reminder] Action Due: ${lead.name} (${lead.leadRef})`;
  const text = `Follow-up reminder for lead ${lead.name} (${lead.leadRef}).\nScheduled at: ${followUpFormatted}\nPhone: ${lead.whatsapp || 'Not provided'}\nOwner: ${lead.owner || 'Unassigned'}\nView details: ${leadDetailUrl}`;
  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #E8D5B0;border-radius:12px;">
      <h2 style="color:#C8860A;margin-top:0;">Lead Follow-up Reminder</h2>
      <p style="font-size:15px;color:#1F1E1A;">This is an automated reminder for an upcoming or due lead follow-up action.</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        <tr><td style="padding:6px 0;color:#6B4F2A;"><strong>Lead Reference:</strong></td><td style="font-family:monospace;">${escapeHtml(lead.leadRef)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B4F2A;"><strong>Prospect Name:</strong></td><td>${escapeHtml(lead.name)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B4F2A;"><strong>Segment:</strong></td><td>${escapeHtml(lead.segment || '—')}</td></tr>
        <tr><td style="padding:6px 0;color:#6B4F2A;"><strong>Scheduled Datetime:</strong></td><td style="color:#C8860A;font-weight:bold;">${escapeHtml(followUpFormatted)}</td></tr>
        <tr><td style="padding:6px 0;color:#6B4F2A;"><strong>Phone / WhatsApp:</strong></td><td>${escapeHtml(lead.whatsapp || '—')}</td></tr>
        <tr><td style="padding:6px 0;color:#6B4F2A;"><strong>Assigned Owner:</strong></td><td>${escapeHtml(lead.owner || 'Unassigned')}</td></tr>
      </table>
      <div style="margin-top:20px;">
        <a href="${leadDetailUrl}" style="background-color:#C8860A;color:#ffffff;text-decoration:none;padding:10px 20px;border-radius:8px;font-weight:bold;display:inline-block;">Open Lead Details in Panel</a>
      </div>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 8000,
  });

  try {
    await transporter.sendMail({
      from: config.from,
      to: config.recipients,
      subject,
      text,
      html,
    });
    return { configured: true, sent: true };
  } catch (error) {
    console.error('Follow-up reminder email failed:', error);
    return { configured: true, sent: false, error: error.message };
  } finally {
    transporter.close();
  }
}
