import { Link } from "react-router-dom";

export default function Home() {
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
                A dedicated <span className="hero-subtitle-strong">Software Engineering Undergraduate</span> with a
                passion for building precise, high-performance digital solutions. Specializing in modern full-stack
                development and architectural excellence.
              </p>

              <div className="hero-pills" aria-label="Primary technologies">
                <span className="hero-pill">REACT</span>
                <span className="hero-pill">TYPESCRIPT</span>
                <span className="hero-pill">NODE.JS</span>
                <span className="hero-pill">PYTHON</span>
              </div>

              <div className="hero-actions">
                <Link to="/contact" className="hero-btn hero-btn-primary">
                  Let's get started <span aria-hidden="true">→</span>
                </Link>
                <Link to="/projects" className="hero-btn hero-btn-secondary">
                  View Projects
                </Link>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-avatar-group">
                <div className="hero-avatar-glow" aria-hidden="true" />
                <div className="hero-avatar">
                  <img src="/photos/My2.JPG" alt="Kavindu Hewamaddumage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

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
