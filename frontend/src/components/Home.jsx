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
                <span className="hero-subtitle-strong">Software Engineering Undergraduate</span>
              </p>

              <div className="hero-pills" aria-label="Primary technologies">
                <span className="hero-pill">JAVA</span>
                <span className="hero-pill">React.js</span>
                <span className="hero-pill">Node.js</span>
                <span className="hero-pill">Next.js</span>
                <span className="hero-pill">Express.js</span>
                <span className="hero-pill">Kotlin</span>
                <span className="hero-pill">PHP</span>
                <span className="hero-pill">SQL</span>
                <span className="hero-pill">MongoDB</span>
                <span className="hero-pill">DOCKER</span>
                <span className="hero-pill">Kubernetes</span>
                <span className="hero-pill">MERN</span>
                <span className="hero-pill">Springboot</span>
                <span className="hero-pill">Git</span>
                <span className="hero-pill">Figma</span>
              </div>

              <div className="hero-actions">
                <Link to="/contact" className="hero-btn hero-btn-primary">
                  Let's get started <span className="cta-arrow" aria-hidden="true">→</span>
                </Link>
                <Link to="/projects" className="hero-btn hero-btn-secondary">
                  View Projects
                </Link>
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

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">KH</div>
          <div className="footer-copy">© 2024 Kavindu Hewamaddumage. Built for precision.</div>
          <div className="footer-links">
            <a href="https://github.com/KavinduKHM" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn link placeholder">
              LinkedIn
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter link placeholder">
              Twitter
            </a>
            <a href="mailto:kavinduhewamadduma@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
