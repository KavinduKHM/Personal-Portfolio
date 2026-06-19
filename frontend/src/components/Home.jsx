import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const rotorText = '• OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK • OPEN TO WORK ';

  return (
    <>
      <section id="home" className="hero hero-gradient">
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />

        <div className="container hero-container">
          <div className="hero-grid">
            <div className="hero-left">
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true" />
                <span className="hero-badge-text">Available for new opportunities</span>
              </div>

              <h1 className="hero-title">
                Kavindu <span className="hero-title-last">Hewamaddumage</span>
              </h1>

              <p className="hero-subtitle">
                <span className="hero-subtitle-strong" style={{ fontSize: '1.3rem'}}>Software Engineering Undergraduate</span>
              </p>

              <div className="hero-pills" aria-label="Primary technologies">
                <span className="hero-pill">JAVA</span>
                <span className="hero-pill">React.js</span>
                <span className="hero-pill">Node.js</span>
                <span className="hero-pill">C#</span>
                <span className="hero-pill">.NET</span>
                <span className="hero-pill">Next.js</span>
                <span className="hero-pill">Express.js</span>
                <span className="hero-pill">MongoDB</span> <br></br>
                <span className="hero-pill">SQL</span>
                <span className="hero-pill">MERN</span>
                <span className="hero-pill">Springboot</span>
                <span className="hero-pill">DOCKER</span>
                <span className="hero-pill">Kubernetes</span>
                <span className="hero-pill">Kotlin</span>
                <span className="hero-pill">PHP</span>
                <span className="hero-pill">Git</span>
                <span className="hero-pill">Figma</span>
              </div>

              <div className="hero-actions" style={{ marginBottom: '32px' }}>
                <Link to="/contact" className="hero-btn hero-btn-primary">
                  Let's get started <span className="cta-arrow" aria-hidden="true">→</span>
                </Link>
                <Link to="/projects" className="hero-btn hero-btn-secondary">
                  View Projects
                </Link>
              </div>

              <div className="hero-socials" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <a href="https://github.com/KavinduKHM" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted)', transition: 'color 0.2s, transform 0.2s' }} onMouseEnter={e => {e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.transform='translateY(-2px)'}} onMouseLeave={e => {e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateY(0)'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/kavindukh/" target="_blank" rel="noreferrer" className="social-icon-link" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted)', transition: 'color 0.2s, transform 0.2s' }} onMouseEnter={e => {e.currentTarget.style.color='var(--accent-2)'; e.currentTarget.style.transform='translateY(-2px)'}} onMouseLeave={e => {e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateY(0)'}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:kavinduhewamadduma@gmail.com" className="social-icon-link" aria-label="Email">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--muted)', transition: 'color 0.2s, transform 0.2s' }} onMouseEnter={e => {e.currentTarget.style.color='var(--violet)'; e.currentTarget.style.transform='translateY(-2px)'}} onMouseLeave={e => {e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateY(0)'}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-avatar-group">
                <div className="hero-avatar-glow" aria-hidden="true" />

                <div className="avatar-rotor" aria-hidden>
                  <svg
                    className="rotor-svg"
                    viewBox="0 0 520 520"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <defs>
                      <path
                        id="ringPath"
                        d="M260,20 a240,240 0 1,1 0,480 a240,240 0 1,1 0,-480"
                        fill="none"
                      />
                    </defs>

                    <text fontFamily="JetBrains Mono, Inter, sans-serif" fontWeight="700" fontSize="20" textAnchor="middle">
                      <textPath xlinkHref="#ringPath" startOffset="0%">
                        {rotorText}
                      </textPath>
                    </text>
                  </svg>

                  <span className="rotor-streak streak1" aria-hidden />
                  <span className="rotor-streak streak2" aria-hidden />
                  <span className="rotor-streak streak3" aria-hidden />
                </div>

                <div className="hero-avatar">
                  <img src="/photos/My2.JPG" alt="Kavindu Hewamaddumage" />
                </div>

                

                
                  
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee tech ticker (full-width)
      <section className="marquee-full" aria-label="Technology ticker">
        <div className="marquee-inner">
          <div className="marquee-track" role="list">
            {[
              "React.js",
              "Node.js",
              "TypeScript",
              "Next.js",
              "MongoDB",
              "Tailwind CSS",
              "Express.js",
              "Java",
              "Kotlin",
              "Docker",
              "Kubernetes",
              "AWS",
              "SpringBoot",
              "PHP",
              "SQL",
              "Git",
              "Figma",
              "Postman",
            ]
              .concat([
                "React.js",
                "Node.js",
                "TypeScript",
                "Next.js",
                "MongoDB",
                "Tailwind CSS",
                "Express.js",
                "Java",
                "Kotlin",
                "Docker",
                "Kubernetes",
                "AWS",
                "SpringBoot",
                "PHP",
                "SQL",
                "Git",
                "Figma",
                "Postman",
              ])
              .map((item, idx) => (
                <div key={`${item}-${idx}`} className="marquee-item" role="listitem">
                  <span className="marquee-text">{item}</span>
                  {idx % 1 === 0 && (
                    <span className="marquee-sep" aria-hidden>
                      ✦
                    </span>
                  )}
                </div>
              ))}
          </div>
          <div className="marquee-mask left" aria-hidden />
          <div className="marquee-mask right" aria-hidden />
        </div> */}
      {/* </section> */}

    </>
  );
}
