import { motion } from "framer-motion";
import "../styles/styles.css";
import { Link } from "react-router-dom";

export default function Resume() {
  const skillCards = [
    {
      key: "backend",
      title: "Backend",
      content: "Node.js, Express.js, JAVA, MongoDB, PHP, SQL",
      className: "span-backend",
      icon: "⚙️"
    },
    {
      key: "frontend",
      title: "Frontend",
      content: "React.js, Next.js, HTML5/CSS, Tailwind",
      className: "span-frontend",
      icon: "🎨"
    },
    {
      key: "mobile",
      title: "Mobile",
      content: "Kotlin, JAVA",
      className: "span-mobile",
      icon: "📱"
    },
    {
      key: "soft",
      title: "Soft Skills",
      content: "Leadership, Critical Thinking, Problem Solving, Quick Learning, Team Work, Communication",
      className: "span-soft",
      icon: "🤝"
    },
    {
      key: "qa",
      title: "QA Testing",
      content: "Postman, SDLC",
      className: "span-qa",
      icon: "🧪"
    },
    {
      key: "tools",
      title: "Tools",
      content: "Git, GitHub, VS Code, Figma, Postman",
      className: "span-tools",
      icon: "🛠️"
    },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.section
      className="page resume-page"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <div className="aurora-root" aria-hidden="true">
        <div className="aurora-blob one"></div>
        <div className="aurora-blob two"></div>
      </div>
      <div className="grain-overlay"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="page-grid resume-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <main>
            <h1 className="hero-title" style={{ fontSize: 'clamp(32px, 6vw, 64px)', marginBottom: '32px' }}>
              My <span className="accent">Resume</span>
            </h1>

            <div className="glass card" style={{ marginBottom: 32 }}>
              <div className="hero-eyebrow" style={{ marginBottom: 16 }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent-2)' }}></span>
                <span>Education</span>
              </div>
              <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
                <li className="glass-strong" style={{ padding: '16px', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--accent)', fontWeight: 700, marginBottom: '4px',fontSize: '1.3rem' }}>BSc (Hons) Information Technology</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--fg)' }}>Specialization in Software Engineering (Undergraduate)</div>
                  <div style={{ fontSize: '1.2rem',fontWeight: 1000, color: 'var(--accent-2)', marginTop: '8px', fontFamily: '"JetBrains Mono", monospace' }}>Cumulative GPA – 3.89/4.00</div>
                </li>
              </ul>
            </div>

            <div className="glass card" style={{ marginBottom: 32 }}>
              <div className="hero-eyebrow" style={{ marginBottom: 16 }}>
                <span className="hero-badge-dot"></span>
                <span>Certifications</span>
              </div>
              <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0 }}>
                <li className="glass-strong" style={{ padding: '16px', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--accent)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>SLIIT Dean’s List Awards</div>
                  <div style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>Year 1 Semester 1 (2024) -  3.8/4.00 GPA</div>
                  <div style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>Year 1 Semester 2 (2025) -  3.96/4.00 GPA</div>
                  <div style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>Year 2 Semester 1 (2025) -  4.00/4.00 GPA</div>
                  <div style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>Year 2 Semester 2 (2025) -  3.77/4.00 GPA </div>
                </li>
                <li className="glass-strong" style={{ padding: '16px', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--accent)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>University of Moratuwa</div>
                  <div style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>• Web Design for Beginners <br></br> • Front End Web Development <br></br> • Python for Beginners <br></br>• Python Programming</div>
                </li>
                <li className="glass-strong" style={{ padding: '16px', borderRadius: '12px' }}>
                  <div style={{ color: 'var(--accent)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>LinkedIn Learning</div>
                  <div style={{ fontSize: '1.1rem', color: 'var(--muted)' }}> • Learning C# <br></br> • C# and .NET Essential Training <br></br>• .NET Fundamentals Concepts APIs and Libraries in the .NET Framework </div>
                </li>
              </ul>
            </div>

            
          </main>

          <aside>
            <div className="glass card" style={{ marginBottom: 32 }}>
              <h3 style={{ fontFamily: '"Fraunces", serif', fontSize: '24px', marginBottom: 16 }}>CV / Resumé</h3>
              <p style={{ color: "var(--muted)", marginBottom: 24, fontSize: '0.9rem' }}>
                Click to open or download the PDF version of my CV. The CV includes detailed information about my education, skills, certifications, and experience.
              </p>
              <div className="resume-cv-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/photos/CV- Kavindu Hewamaddumage.pdf" target="_blank" rel="noreferrer" className="btn-glass" style={{ textDecoration: "none", flex: 1, textAlign: 'center' }}>
                  View CV
                </a>
                <a href="/photos/CV- Kavindu Hewamaddumage.pdf" download className="btn-primary-gradient" style={{ textDecoration: "none", flex: 1, textAlign: 'center' }}>
                  Download CV
                </a>
              </div>
            </div>

            <div className="glass card">
              <h3 style={{ fontFamily: '"Fraunces", serif', fontSize: '24px', marginBottom: 20 }}>Skills Showcase</h3>
              <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
                {skillCards.map((c) => (
                  <article key={c.key} className={`glass-strong bento-tile ${c.className}`}>
                    <div className="tile-header">
                      <h4 className="tile-title" style={{ fontSize: '20px' }}>{c.title}</h4>
                      <span className="tile-icon" style={{ width: '32px', height: '32px', fontSize: '16px' }}>{c.icon}</span>
                    </div>
                    <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {c.content.split(",").map((tag) => (
                        <span key={tag} className="chip" style={{ fontSize: '12px', padding: '6px 8px' }}>{tag.trim()}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}
