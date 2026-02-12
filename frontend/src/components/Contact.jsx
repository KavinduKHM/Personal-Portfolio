import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contact", form);
    alert("Message sent successfully!");
  };

  return (
    <section className="page contact-section">
      <h2>Contact Me</h2>
      <form className="card contact-form" onSubmit={submit}>
        <input placeholder="Your Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Your Email" onChange={e => setForm({...form, email: e.target.value})} />
        <textarea placeholder="Your Message" onChange={e => setForm({...form, message: e.target.value})}></textarea>
        <button className="btn-primary">Send Message</button>
      </form>
    </section>
  );
}
