// api/contact.js

const nodemailer = require('nodemailer');

// 1. Configure the transporter using secure environment variables
const transporter = nodemailer.createTransport({
  // Use Vercel Environment Variables (we will set these up next!)
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT), 
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER, // Your email address
    pass: process.env.SMTP_PASS, // Your App Password
  },
});

// The main handler function for the API endpoint
module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 2. Extract data from the React form body
  const { fullName, email, subject, message } = req.body;

  // Basic validation
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required form fields.' });
  }

  // 3. Define the email content
  const mailOptions = {
    // This is the email address the message is sent TO (Your email)
    to: 'ezeaniandrew8197@gmail.com',
    
    // The email address the message appears to be FROM (The user's email)
    from: `${fullName} <${email}>`, 
    
    subject: `[Contact Form] ${subject}`,
    
    // HTML content for the email body
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
    // 4. Send the email
    await transporter.sendMail(mailOptions);
    
    // 5. Send a success response back to the React component
    res.status(200).json({ message: 'Message sent successfully! You will be contacted shortly.' });
  } catch (error) {
    console.error('Email sending failed:', error);
    // 6. Send an error response back to the React component
    res.status(500).json({ 
      message: 'Failed to send message. Please try again.', 
      details: error.message 
    });
  }
};