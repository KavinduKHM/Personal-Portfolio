const router = require("express").Router();
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Optional but recommended
transporter.verify((error) => {
  if (error) {
    console.error("SMTP Error:", error);
  } else {
    console.log("SMTP Server is ready to send emails");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Save to DB
    await new Contact({ name, email, message }).save();

    // 2. Send Email
    await transporter.sendMail({
      from: process.env.MAIL_FROM,   // MUST be your email
      to: process.env.MAIL_TO,
      replyTo: email,               // THIS is the key part
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: "Message sent successfully" });

  } catch (err) {
    console.error("Contact submission failed", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
