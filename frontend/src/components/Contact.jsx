import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const submit = (e) => {
    e.preventDefault();

    const recipient = "kavinduhewamadduma@gmail.com";
    const subject = form.subject || `Portfolio message from ${form.name || "(no name)"}`;
    const body = [
      `Name: ${form.name || ""}`,
      `Email: ${form.email || ""}`,
      `Subject: ${form.subject || ""}`,
      "",
      form.message || "",
    ].join("\n");

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="page contact-section">
      <div className="container contact-hero">
        <span className="badge available">AVAILABLE FOR WORK</span>
        <h1>Contact Me</h1>
        <p className="lede">I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

        <div className="contact-layout">
          <form className="card contact-form glass-card" onSubmit={submit}>
            <div className="row">
              <label>Name</label>
              <input
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="row">
              <label>Email</label>
              <input
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="row">
              <label>Subject</label>
              <input
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
              />
            </div>

            <div className="row">
              <label>Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>

            <div className="actions">
              <button className="btn-primary send-btn" type="submit">Send Message <span className="arrow">▸</span></button>
            </div>
          </form>

          <div className="contact-right">
            <div className="card contact-details">
              <h3>Personal Details</h3>
              <div className="detail-row"><span className="icon">👤</span><div><div className="label">Name</div><div className="value">Kavindu Kalhara Hewamaddumage</div></div></div>
              <div className="detail-row"><span className="icon">✉️</span><div><div className="label">Email</div><div className="value"><a href="mailto:kavinduhewamadduma@gmail.com">kavinduhewamadduma@gmail.com</a></div></div></div>
              <div className="detail-row"><span className="icon">📞</span><div><div className="label">Phone</div><div className="value">+94 70 3881 351</div></div></div>
              <div className="detail-row"><span className="icon">📍</span><div><div className="label">Address</div><div className="value">Nugagahahena, Eduwa, Palatuwa, Matara</div></div></div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
