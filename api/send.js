import nodemailer from 'nodemailer';
import { getNotificationHtml, getAcknowledgementHtml } from '../templates/emailTemplates.cjs';

export default async function handler(req, res) {
  // Configure CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // SMTP Transporter configuration using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER, // Your email address
      pass: process.env.SMTP_PASS, // Your App Password
    },
  });

  const notificationHtml = getNotificationHtml(name, email, subject, message);
  const acknowledgementHtml = getAcknowledgementHtml(name, subject, message);

  const notificationOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_TO || process.env.SMTP_USER,
    replyTo: email,
    subject: `[SYSTEM ALERT] Portfolio Submission: ${subject}`,
    html: notificationHtml,
  };

  const acknowledgementOptions = {
    from: `"Aditya Sharma" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Acknowledgement: Transmission Secured - "${subject}"`,
    html: acknowledgementHtml,
  };

  try {
    // Deliver notification to you
    const info = await transporter.sendMail(notificationOptions);
    console.log('Notification sent: %s', info.messageId);

    // Deliver acknowledgement to the user
    await transporter.sendMail(acknowledgementOptions);
    console.log('Acknowledgement dispatched.');

    return res.status(200).json({ success: 'Message successfully dispatched!' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return res.status(500).json({ error: 'Failed to transmit message via SMTP serverless function.' });
  }
}
