import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    // Frontend-only submission now that the backend has been removed
    setForm({ name: "", email: "", message: "" });
    alert("Message sent! (Demo form – no backend required.)");
  };

  return (
    <section className="page contact-section">
      <h2>Contact Me</h2>
      <div className="contact-layout">
        <form className="card contact-form" onSubmit={submit}>
          <input
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
          ></textarea>
          <button className="btn-primary">Send Message</button>
        </form>

        <div className="card contact-details">
          <h3>Personal Contact Details</h3>
          <p><strong>Name:</strong> Kavindu Kalhara Hewamaddumage</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:kavinduhewamadduma@gmail.com " target="_blank" rel="noreferrer">
              kavinduhewamadduma@gmail.com
            </a>
          </p>
          <p><strong>Contact Number:</strong> +94 70 3881 351</p>
          <p><strong>Address:</strong> Nugagahahena,Eduwa,Palatuwa,Matara</p>
        </div>
      </div>
    </section>
  );
}
