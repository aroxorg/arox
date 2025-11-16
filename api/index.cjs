// api/contact.cjs

const nodemailer = require('nodemailer');

// Ensure you have set these secure variables in your Vercel Dashboard!
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com', 
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, 
  },
});

// The Vercel function handler
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Extract data from the request body
  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required form fields.' });
  }

  // Define the email content
  const mailOptions = {
    // Recipient (The email you want the message to go to)
    to: 'ezeaniandrew8197@gmail.com', 
    
    // Sender (Allows you to reply directly to the user's email)
    from: `${fullName} <${email}>`, 
    
    subject: `[Contact Form] ${subject}`,
    
    html: `
      <h3>New Contact Submission</h3>
      <p><strong>From:</strong> ${fullName} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    
    // Success response
    res.status(200).json({ message: 'Message sent successfully! Thank you for reaching out.' });
  } catch (error) {
    console.error('Email sending failed:', error);
    // Error response
    res.status(500).json({ 
      message: 'Failed to send message. Please try again later.', 
    });
  }
};