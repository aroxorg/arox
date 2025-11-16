import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  let body = req.body;

  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (err) {
      return res.status(400).json({ message: 'Invalid JSON' });
    }
  }

  const { fullName, email, subject, message } = body || {};

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      to: "ezeaniandrew8197@gmail.com",
      from: `${fullName} <${email}>`,
      subject: `[Contact Form] ${subject}`,
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return res.status(200).json({ message: 'Message sent successfully!' });

  }catch (error) {
  console.error("Email sending failed:", error);

  return res.status(500).json({
    message: 'Failed to send message.',
    error: error.message,   // ← Add this
  });
}
}
