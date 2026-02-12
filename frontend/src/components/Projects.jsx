import { Link } from "react-router-dom";
import { projects as projectList } from "../data/projects";

// Generate a URL-friendly slug for stable case study links
const slugify = text =>
  text?.toString().toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-") || "project";

export default function Projects() {
  // Use hardcoded projects from the frontend data file
  const projects = projectList;

  return (
    <section id="projects" className="page projects-section">
      <h2 style={{color:"#63da6b"}}>Projects</h2>
      <div className="project-grid">
        {projects.map(project => {
          const techList = Array.isArray(project.technologies)
            ? project.technologies.join(", ")
            : project.technologies || "Not specified";

          const slug = project.slug || slugify(project.title || project._id);

          return (
            <div className="card project-card" key={project._id || slug}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {techList}</p>
              <a href={project.link} target="_blank" rel="noreferrer">View Project →</a>
              <Link to={`/projects/${slug}/case-study`} className="case-study-link">View case study →</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
