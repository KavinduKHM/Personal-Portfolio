import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section 
      className="page contact-section"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="aurora-root" aria-hidden="true">
        <div className="aurora-blob one"></div>
        <div className="aurora-blob two"></div>
      </div>
      <div className="grain-overlay"></div>
      
      <div className="container contact-hero" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-eyebrow" style={{ marginBottom: 16 }}>
          <span className="hero-badge-dot"></span>
          <span>Available for work</span>
        </div>
        
        <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 6vw, 64px)', marginBottom: '16px' }}>
          Contact <span className="accent">Me</span>
        </h1>
        <p className="hero-lede" style={{ marginBottom: 40 }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-layout" style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '48px', alignItems: 'start' }}>
          <form className="card glass" onSubmit={submit} style={{ padding: '32px' }}>
            <div className="row" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: 'var(--muted)' }}>Name</label>
              <input
                placeholder="Your Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '12px', color: 'var(--fg)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div className="row" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: 'var(--muted)' }}>Email</label>
              <input
                placeholder="email@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '12px', color: 'var(--fg)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div className="row" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: 'var(--muted)' }}>Subject</label>
              <input
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '12px', color: 'var(--fg)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div className="row" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              <label style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', color: 'var(--muted)' }}>Message</label>
              <textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '12px', color: 'var(--fg)', fontSize: '15px', outline: 'none', transition: 'border-color 0.2s', minHeight: '140px', resize: 'vertical' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              ></textarea>
            </div>

            <div className="actions">
              <button className="btn-primary-gradient" type="submit" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: 'none', cursor: 'pointer', fontSize: '15px' }}>
                Send Message <span className="arrow" style={{ fontSize: '18px' }}>→</span>
              </button>
            </div>
          </form>

          <div className="contact-right">
            <div className="card glass-strong" style={{ padding: '32px' }}>
              <h3 style={{ fontFamily: '"Fraunces", serif', fontSize: '24px', marginBottom: '24px' }}>Personal Details</h3>
              
              <div className="detail-row" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <span className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(52, 211, 153, 0.1)', color: 'var(--accent)', fontSize: '20px' }}>👤</span>
                <div>
                  <div className="label" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '4px' }}>Name</div>
                  <div className="value" style={{ fontWeight: 600 }}>Kavindu Kalhara Hewamaddumage</div>
                </div>
              </div>
              
              <div className="detail-row" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <span className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(34, 211, 238, 0.1)', color: 'var(--accent-2)', fontSize: '20px' }}>✉️</span>
                <div>
                  <div className="label" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '4px' }}>Email</div>
                  <div className="value" style={{ fontWeight: 600 }}><a href="mailto:kavinduhewamadduma@gmail.com" style={{ color: 'var(--fg)', textDecoration: 'none' }}>kavinduhewamadduma@gmail.com</a></div>
                </div>
              </div>
              
              <div className="detail-row" style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <span className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(167, 139, 250, 0.1)', color: 'var(--violet)', fontSize: '20px' }}>📞</span>
                <div>
                  <div className="label" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '4px' }}>Phone</div>
                  <div className="value" style={{ fontWeight: 600 }}>+94 70 3881 351</div>
                </div>
              </div>
              
              <div className="detail-row" style={{ display: 'flex', gap: '16px' }}>
                <span className="icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--fg)', fontSize: '20px' }}>📍</span>
                <div>
                  <div className="label" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px', color: 'var(--muted)', marginBottom: '4px' }}>Address</div>
                  <div className="value" style={{ fontWeight: 600, lineHeight: 1.4 }}>Nugagahahena, Eduwa, Palatuwa, Matara</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
