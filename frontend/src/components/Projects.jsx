import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects as projectList } from "../data/projects";
import { caseStudies } from "../data/caseStudies";

// Generate a URL-friendly slug for stable case study links
const slugify = text =>
  text?.toString().toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-") || "project";

const filterCategories = [
  { label: "All", value: "All" },
  { label: "React / Node.js", value: "react-node" },
  { label: "Spring Boot", value: "spring-boot" },
  { label: "Mobile (Android)", value: "mobile" },
  { label: "PHP / Databases", value: "php-db" }
];

export default function Projects() {
  const projects = projectList || [];
  const [filter, setFilter] = React.useState("All");

  const visible = filter === "All" ? projects : projects.filter(p => {
    const techs = (Array.isArray(p.technologies) ? p.technologies : [p.technologies || ""]).map(t => t.toLowerCase());

    if (filter === "react-node") {
      return techs.includes("react") || techs.includes("react.js") || techs.includes("node.js") || techs.includes("express.js");
    }
    if (filter === "spring-boot") {
      return techs.includes("spring boot") || techs.includes("spring cloud");
    }
    if (filter === "mobile") {
      return techs.includes("kotlin") || techs.includes("android sdk") || techs.includes("androidx");
    }
    if (filter === "php-db") {
      return techs.includes("php") || techs.includes("sql") || (techs.includes("mysql") && !techs.includes("spring boot"));
    }
    return false;
  });

  return (
    <section id="projects" className="page projects-section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="aurora-root" aria-hidden="true">
        <div className="aurora-blob one" />
        <div className="aurora-blob two" />
      </div>
      <div className="container projects-hero">
        <div className="glass glass-strong" style={{ padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div>
              <div className="hero-eyebrow">Work</div>
              <h1 className="hero-title" style={{ margin: 0, fontSize: 40 }}>Projects <span className="accent">Showcase</span></h1>
              <p className="hero-lede" style={{ marginTop: 8 }}>A curated selection of projects demonstrating architecture, UI/UX, and engineering craft.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontFamily: 'JetBrains Mono', color: 'var(--muted)', fontSize: 12 }}>Filter by</div>
              <div className="projects-filters">
                {filterCategories.map(cat => (
                  <button
                    key={cat.value}
                    className={`chip ${filter === cat.value ? 'active' : ''}`}
                    onClick={() => setFilter(cat.value)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 28 }}>
        <div className="projects-grid">
          {visible.map(project => {
            const techList = Array.isArray(project.technologies) ? project.technologies : (project.technologies ? [project.technologies] : []);
            const slug = project.slug || slugify(project.title || project._id);

            const study = caseStudies?.[slug];
            const firstShot = study && Array.isArray(study.screenshots) && study.screenshots.length > 0 ? study.screenshots[0] : null;
            const imgSrc = project.image || firstShot?.src || null;
            const imgAlt = project.imageAlt || firstShot?.alt || project.title;

            const initials = (project.title || project._id || '')
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map(w => w[0].toUpperCase())
              .join('');

            return (
              <motion.article
                layout
                className="card project-card"
                key={project._id || slug}
              >
                <div className="project-media">
                  {imgSrc ? (
                    <img src={imgSrc} alt={imgAlt} className="project-image" />
                  ) : (
                    <div className="project-placeholder"><span className="initials">{initials}</span></div>
                  )}
                  <div className="project-media-overlay" />
                </div>

                <div className="project-body">
                  <div className="project-tags">
                    {techList.slice(0, 3).map(t => <span key={t} className="project-tag">{t}</span>)}
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-excerpt">{project.description}</p>

                  <div className="project-actions">
                    {project.link ? (
                      <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                        <span>View Live</span>
                        <svg className="action-icon" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </a>
                    ) : (
                      <span className="project-link disabled">No live link</span>
                    )}
                    <Link className="case-study-link" to={`/projects/${slug}/case-study`}>
                      <span>Case Study</span>
                      <svg className="action-icon arrow-right" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
