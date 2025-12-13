// api/index.cjs

const nodemailer = require("nodemailer");

// Ensure you have set these secure variables in your Vercel Dashboard!
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// The Vercel function handler
module.exports = async function (req, res) {
  // Ensure we always return JSON and handle preflight
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Safely parse the request body in case it's a string
  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (err) {
      console.error("Invalid JSON body:", err);
      return res.status(400).json({ message: "Invalid JSON in request body." });
    }
  }

  // Extract data from the request body
  const { fullName, email, subject, message } = body || {};

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing required form fields." });
  }

  // Define the email content
  const mailOptions = {
    // Recipient (The email you want the message to go to)
    to: "ezeaniandrew8197@gmail.com@gmail.com",

    // Sender (Allows you to reply directly to the user's email)
    from: `${fullName} <${email}>`,

    subject: `[Contact Form] ${subject}`,

    html: `
      <h3>New Contact Submission</h3>
      <p><strong>From:</strong> ${fullName} (${email})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr/>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    // Success response
    return res.status(200).json({
      message: "Message sent successfully! Thank you for reaching out.",
    });
  } catch (error) {
    console.error("Email sending failed:", error);
    // Error response
    return res.status(500).json({
      message: "Failed to send message. Please try again later.",
    });
  }
};
