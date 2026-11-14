import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAILS = [
  'ankushcoder497001@gmail.com',
  'ankushgupta997769@gmail.com',
  'shrikantpandey985@gmail.com',
  'aatoshkumar3333@gmail.com',
];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message, agencyWebsite, serviceNeeded } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const safeMessage = (message || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeWebsite = (agencyWebsite || 'Not provided').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeService = (serviceNeeded || 'General Inquiry').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
        <h2 style="color: #A06A00; border-bottom: 2px solid #C8860A; padding-bottom: 10px;">New Project Brief Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Work Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Agency Website:</strong> ${safeWebsite}</p>
        <p><strong>Service Needed:</strong> ${safeService}</p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <h3 style="color: #333;">Project Brief:</h3>
        <p style="white-space: pre-wrap; background: #f9f9f9; padding: 12px; border-radius: 6px; border: 1px solid #eee;">${safeMessage}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: RECIPIENT_EMAILS.join(', '),
      replyTo: email,
      subject: `[BBS Project Brief] ${name} - ${safeService}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
