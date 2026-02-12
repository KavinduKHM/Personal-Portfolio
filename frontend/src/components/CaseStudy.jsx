import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies[slug];

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

  if (!study) {
    return (
      <section className="page case-study-page">
        <h2>Case study coming soon</h2>
        <p>We are preparing a detailed write-up for this project.</p>
        <Link to="/projects" className="case-study-link">← Back to projects</Link>
      </section>
    );
  }

  return (
    <section className="page case-study-page">
      <header className="case-study-hero">
        <p className="eyebrow">Case Study</p>
        <h1>{study.title}</h1>
        <p className="lede">{renderWithBreaks(study.summary)}</p>
      </header>

      <div className="case-study-body">
        <article>
          <h3>Problem</h3>
          <p>{renderWithBreaks(study.problem)}</p>
        </article>

        <article>
          <h3>Solution & Approach</h3>
          <p>{renderWithBreaks(study.approach)}</p>
        </article>

        <article>
          <h3>Outcome</h3>
          <p>{renderWithBreaks(study.outcome)}</p>
        </article>

        {Array.isArray(study.keyFeatures) && study.keyFeatures.length > 0 && (
          <article>
            <h3>Key Features</h3>
            <ul>
              {study.keyFeatures.map(item => <li key={item}>{item}</li>)}
            </ul>
          </article>
        )}

        {study.userResearch && (
          <article>
            <h3>User Research & Validation</h3>
            <p><strong>Who:</strong> {study.userResearch.participants}</p>
            <p><strong>What changed:</strong> {renderWithBreaks(study.userResearch.insight)}</p>
          </article>
        )}

        

        {Array.isArray(study.technicalHighlights) && study.technicalHighlights.length > 0 && (
          <article>
            <h3>Technical Highlights</h3>
            <ul>
              {study.technicalHighlights.map(item => <li key={item}>{item}</li>)}
            </ul>
          </article>
        )}

        {Array.isArray(study.screenshots) && study.screenshots.length > 0 && (
          <article>
            <h3>Screenshots</h3>
            <div className="case-media-grid">
              {study.screenshots.map((shot, idx) => {
                const src = typeof shot === "string" ? shot : shot.src;
                const alt = typeof shot === "string" ? `${study.title} screenshot ${idx + 1}` : shot.alt || `${study.title} screenshot ${idx + 1}`;
                const caption = typeof shot === "string" ? null : shot.caption;
                return (
                  <figure key={src || idx} className="case-media-card">
                    <img src={src} alt={alt} />
                    {caption && <figcaption>{caption}</figcaption>}
                  </figure>
                );
              })}
            </div>
          </article>
        )}

        {Array.isArray(study.demoVideos) && study.demoVideos.length > 0 && (
          <article>
            <h3>Demo Videos</h3>
            <div className="case-media-grid">
              {study.demoVideos.map((video, idx) => {
                const url = typeof video === "string" ? video : video.url;
                const title = typeof video === "string" ? `${study.title} demo ${idx + 1}` : video.title || `${study.title} demo ${idx + 1}`;
                return (
                  <figure key={url || idx} className="case-media-card">
                    {url && url.endsWith(".mp4") ? (
                      <video controls src={url} title={title} />
                    ) : (
                      <a href={url} target="_blank" rel="noreferrer" className="case-study-link">Watch demo →</a>
                    )}
                    <figcaption>{title}</figcaption>
                  </figure>
                );
              })}
            </div>
          </article>
        )}

      </div>

      <Link to="/projects" className="case-study-link">← Back to projects</Link>
    </section>
  );
}
