require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const { getNotificationHtml, getAcknowledgementHtml } = require('./templates/emailTemplates.cjs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Transporter configuration using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER, // Your email address
    pass: process.env.SMTP_PASS, // Your email password or app password
  },
});

// Verify connection configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to deliver messages!');
  }
});

// Email dispatch API route
app.post('/api/send', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All form fields are required.' });
  }

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

    // Deliver acknowledgement to the user in background
    transporter.sendMail(acknowledgementOptions)
      .then(ackInfo => console.log('Acknowledgement dispatched: %s', ackInfo.messageId))
      .catch(ackErr => console.error('Failed to send acknowledgement email:', ackErr));

    return res.status(200).json({ success: 'Message successfully dispatched!' });
  } catch (error) {
    console.error('Nodemailer SMTP Error:', error);
    return res.status(500).json({ error: 'Failed to transmit message via SMTP.' });
  }
});

// Serve static assets in production
app.use(express.static(path.join(__dirname, 'dist')));

// Wildcard fallback to serve index.html for React Router / SPA configuration
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`SMTP Mail Relay Server running on port ${PORT}`);
});
