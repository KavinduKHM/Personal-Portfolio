import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudy() {
  const { slug } = useParams();

  // Robust lookup: try exact key first, then fall back to a normalized key match
  const normalize = s => (s || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "");
  let study = caseStudies?.[slug];
  if (!study && caseStudies) {
    const foundKey = Object.keys(caseStudies).find(k => normalize(k) === normalize(slug));
    if (foundKey) {
      study = caseStudies[foundKey];
    }
  }

  const renderWithBreaks = (text) => {
    if (!text) return null;
    const parts = text.split("\n");
    return parts.map((line, idx) => (
      <span key={idx}>
        {line}
        {idx < parts.length - 1 && <br />}
      </span>
    ));
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  if (!study) {
    return (
      <motion.section 
        className="page case-study-page"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        <div className="aurora-root" aria-hidden="true">
          <div className="aurora-blob one"></div>
          <div className="aurora-blob two"></div>
        </div>
        <div className="grain-overlay"></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: '100px' }}>
          <h2 className="hero-title" style={{ fontSize: '3rem' }}>Case study coming soon</h2>
          <p className="hero-lede" style={{ marginBottom: '40px' }}>We are preparing a detailed write-up for this project.</p>
          <Link to="/projects" className="btn-primary-gradient" style={{ display: 'inline-block', textDecoration: 'none' }}>← Back to projects</Link>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section 
      className="page case-study-page"
      initial="initial"
      animate="animate"
      variants={pageVariants}
      style={{ minHeight: '100vh', position: 'relative' }}
    >
      <div className="aurora-root" aria-hidden="true">
        <div className="aurora-blob one"></div>
        <div className="aurora-blob two"></div>
      </div>
      <div className="grain-overlay"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '40px', paddingBottom: '80px' }}>
        <header className="case-study-hero" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <div className="hero-eyebrow" style={{ justifyContent: 'center', marginBottom: '16px' }}>
            <span className="hero-badge-dot" style={{ background: 'var(--accent)' }}></span>
            <span>Case Study</span>
          </div>
          <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>{study.title}</h1>
          <p className="hero-lede" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--muted)' }}>
            {renderWithBreaks(study.summary)}
          </p>
        </header>

        <div className="case-study-body" style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '1000px', margin: '0 auto' }}>
          
          <div className="bento-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '32px', display: 'grid' }}>
            <article className="glass card" style={{ padding: '32px' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '16px', color: 'var(--accent)' }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent)' }}></span>
                Problem
              </div>
              <p style={{ color: 'var(--fg)', lineHeight: '1.6' }}>{renderWithBreaks(study.problem)}</p>
            </article>

            <article className="glass card" style={{ padding: '32px' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '16px', color: 'var(--accent-2)' }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent-2)' }}></span>
                Solution & Approach
              </div>
              <p style={{ color: 'var(--fg)', lineHeight: '1.6' }}>{renderWithBreaks(study.approach)}</p>
            </article>
          </div>

          <article className="glass-strong card" style={{ padding: '32px' }}>
            <div className="hero-eyebrow" style={{ marginBottom: '16px', color: 'var(--accent)' }}>
              <span className="hero-badge-dot" style={{ background: 'var(--accent)' }}></span>
              Outcome
            </div>
            <p style={{ color: 'var(--fg)', lineHeight: '1.6', fontSize: '1.1rem' }}>{renderWithBreaks(study.outcome)}</p>
          </article>

          {Array.isArray(study.keyFeatures) && study.keyFeatures.length > 0 && (
            <article className="glass card" style={{ padding: '32px' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '16px', color: 'var(--accent-2)' }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent-2)' }}></span>
                Key Features
              </div>
              <ul style={{ listStyleType: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', padding: 0 }}>
                {study.keyFeatures.map(item => (
                  <li key={item} className="glass-strong" style={{ padding: '16px', borderRadius: '12px', color: 'var(--fg)', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'var(--accent)', marginTop: '2px' }}>•</span>
                    <span style={{ flex: 1, wordBreak: 'break-word' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}

          {study.userResearch && (
            <article className="glass card" style={{ padding: '32px' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '16px', color: 'var(--accent)' }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent)' }}></span>
                User Research & Validation
              </div>
              <div className="glass-strong" style={{ padding: '24px', borderRadius: '12px', marginBottom: '16px' }}>
                <p style={{ margin: '0 0 8px 0', color: 'var(--accent)' }}><strong>Participants</strong></p>
                <p style={{ margin: 0, color: 'var(--fg)' }}>{study.userResearch.participants}</p>
              </div>
              <div className="glass-strong" style={{ padding: '24px', borderRadius: '12px' }}>
                <p style={{ margin: '0 0 8px 0', color: 'var(--accent-2)' }}><strong>Insights & Outcomes</strong></p>
                <p style={{ margin: 0, color: 'var(--fg)' }}>{renderWithBreaks(study.userResearch.insight)}</p>
              </div>
            </article>
          )}

          {Array.isArray(study.technicalHighlights) && study.technicalHighlights.length > 0 && (
            <article className="glass card" style={{ padding: '32px' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '16px', color: 'var(--accent-2)' }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent-2)' }}></span>
                Technical Highlights
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {study.technicalHighlights.map(item => (
                  <span key={item} className="glass-strong" style={{ padding: '12px 20px', fontSize: '1.05rem', borderRadius: '8px', color: 'var(--accent)', fontWeight: 600, border: '1px solid rgba(52, 211, 153, 0.2)' }}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          )}

          {Array.isArray(study.screenshots) && study.screenshots.length > 0 && (
            <article className="glass card" style={{ padding: '32px' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '24px', color: 'var(--accent)' }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent)' }}></span>
                Screenshots
              </div>
              <div className="case-media-grid" style={{ display: 'grid', gap: '24px' }}>
                {study.screenshots.map((shot, idx) => {
                  const src = typeof shot === "string" ? shot : shot.src;
                  const alt = typeof shot === "string" ? `${study.title} screenshot ${idx + 1}` : shot.alt || `${study.title} screenshot ${idx + 1}`;
                  const caption = typeof shot === "string" ? null : shot.caption;
                  return (
                    <figure key={src || idx} className="glass-strong" style={{ margin: 0, padding: '16px', borderRadius: '16px' }}>
                      <img src={src} alt={alt} style={{ width: '100%', borderRadius: '8px', objectFit: 'contain', backgroundColor: 'rgba(0,0,0,0.2)' }} />
                      {caption && <figcaption style={{ marginTop: '12px', textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>{caption}</figcaption>}
                    </figure>
                  );
                })}
              </div>
            </article>
          )}

          {Array.isArray(study.demoVideos) && study.demoVideos.length > 0 && (
            <article className="glass card" style={{ padding: '32px' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '24px', color: 'var(--accent-2)' }}>
                <span className="hero-badge-dot" style={{ background: 'var(--accent-2)' }}></span>
                Demo Videos
              </div>
              <div className="case-media-grid" style={{ display: 'grid', gap: '24px' }}>
                {study.demoVideos.map((video, idx) => {
                  const url = typeof video === "string" ? video : video.url;
                  const title = typeof video === "string" ? `${study.title} demo ${idx + 1}` : video.title || `${study.title} demo ${idx + 1}`;
                  return (
                    <figure key={url || idx} className="glass-strong" style={{ margin: 0, padding: '16px', borderRadius: '16px' }}>
                      {url && url.endsWith(".mp4") ? (
                        <video controls src={url} title={title} style={{ width: '100%', borderRadius: '8px' }} />
                      ) : (
                        <a href={url} target="_blank" rel="noreferrer" className="btn-glass" style={{ display: 'inline-block', textDecoration: 'none' }}>Watch demo →</a>
                      )}
                      <figcaption style={{ marginTop: '12px', textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem' }}>{title}</figcaption>
                    </figure>
                  );
                })}
              </div>
            </article>
          )}

        </div>

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <Link to="/projects" className="btn-primary-gradient" style={{ display: 'inline-block', textDecoration: 'none' }}>← Back to projects</Link>
        </div>
      </div>
    </motion.section>
  );
}
