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

      <section className="bento-section">
        <div className="container">
          <header className="bento-header">
            <h2 className="bento-title">
              Engineering <span className="bento-title-accent">Excellence.</span>
            </h2>
            <p className="bento-subtitle">
              Selected projects demonstrating technical depth and user-centric design principles.
            </p>
          </header>

          <div className="bento-grid">
            <article className="glass-card bento-card bento-card-lg">
              <div className="bento-card-body">
                <div className="bento-card-top">
                  <div className="bento-eyebrow">Full Stack Application</div>
                  <h3 className="bento-card-title">NextGen Dashboard</h3>
                  <p className="bento-card-text">
                    A sophisticated enterprise dashboard built with React for fast iteration and polished UX.
                  </p>
                </div>

                <figure className="bento-media">
                  <img src="/photos/Dashboard.png" alt="NextGen Dashboard UI" />
                </figure>
              </div>
            </article>

            <article className="glass-card bento-card bento-card-sm">
              <div className="bento-card-body">
                <div className="bento-eyebrow bento-eyebrow-tertiary">Internal Tool</div>
                <h3 className="bento-card-title">CLI Core</h3>
                <p className="bento-card-text">
                  A high-performance command line interface for automated deployment pipelines.
                </p>

                <div className="terminal-card" aria-label="CLI preview">
                  <div className="terminal-dots" aria-hidden="true">
                    <span className="dot dot-red" />
                    <span className="dot dot-green" />
                    <span className="dot dot-blue" />
                  </div>
                  <pre className="terminal-pre">
                    <code>
                      <span className="t-primary">$ npm run deploy --prod</span>
                      {"\n"}
                      <span className="t-muted">Building assets... [OK]</span>
                      {"\n"}
                      <span className="t-muted">Deploying to cloud... [OK]</span>
                      {"\n"}
                      <span className="t-accent">Live at: kh-portfolio.sh</span>
                    </code>
                  </pre>
                </div>
              </div>
            </article>

            <section className="glass-card bento-card bento-competencies" aria-label="Core competencies">
              <h4 className="bento-mini-title">Core Competencies</h4>
              <ul className="bento-list">
                <li>
                  <span className="bento-check" aria-hidden="true">✓</span>
                  Architectural Design
                </li>
                <li>
                  <span className="bento-check" aria-hidden="true">✓</span>
                  Cloud Computing
                </li>
                <li>
                  <span className="bento-check" aria-hidden="true">✓</span>
                  UI/UX Systems
                </li>
                <li>
                  <span className="bento-check" aria-hidden="true">✓</span>
                  API Orchestration
                </li>
              </ul>
            </section>

            <section className="bento-cta" aria-label="Call to action">
              <div>
                <h3 className="bento-cta-title">Ready to collaborate?</h3>
                <p className="bento-cta-text">Let's build something extraordinary together.</p>
              </div>
              <Link to="/contact" className="bento-cta-btn">
                Start a Project
              </Link>
            </section>
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
