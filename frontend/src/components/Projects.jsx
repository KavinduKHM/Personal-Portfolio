import { Link } from "react-router-dom";
import { projects as projectList } from "../data/projects";
import { caseStudies } from "../data/caseStudies";

// Generate a URL-friendly slug for stable case study links
const slugify = text =>
  text?.toString().toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-") || "project";

export default function Projects() {
  const projects = projectList;

  return (
    <section id="projects" className="page projects-section">
      <div className="container projects-hero">
        <h1 className="projects-title">Featured <span className="projects-title-accent">Projects</span></h1>
        <p className="projects-lede">A selection of architectural software solutions and engineering experiments built with modern technical stacks.</p>
      </div>

      <div className="container projects-grid">
        {projects.map(project => {
          const techs = Array.isArray(project.technologies) ? project.technologies : (project.technologies ? [project.technologies] : []);
          const slug = project.slug || slugify(project.title || project._id);

          // prefer explicit project.image first; fall back to first case-study screenshot
          const study = caseStudies[slug];
          const firstShot = study && Array.isArray(study.screenshots) && study.screenshots.length > 0 ? study.screenshots[0] : null;
          const imgSrc = project.image || firstShot?.src || null;
          const imgAlt = project.imageAlt || firstShot?.alt || project.title;

          // generate initials for placeholder when no image is available
          const initials = (project.title || project._id || '')
            .split(/\s+/)
            .filter(Boolean)
            .slice(0,2)
            .map(w => w[0].toUpperCase())
            .join('');

          return (
            <article className="card project-card" key={project._id || slug}>
              {imgSrc ? (
                <div className="project-media">
                  <img src={imgSrc} alt={imgAlt} />
                </div>
              ) : (
                <div className="project-media placeholder" aria-hidden>
                  <span className="initials">{initials}</span>
                </div>
              )}

              <div className="project-body">
                <div className="project-tags">
                  {techs.slice(0,3).map(t => (
                    <span className="project-tag" key={t}>{t}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-excerpt">{project.description}</p>

                <div className="project-actions">
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">VIEW PROJECT ↗</a>
                  <Link className="case-study-link" to={`/projects/${slug}/case-study`}>CASE STUDY</Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
