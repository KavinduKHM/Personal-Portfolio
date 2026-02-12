import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Generate a URL-friendly slug for stable case study links
const slugify = text =>
  text?.toString().toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-") || "project";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => {
        const sorted = [...res.data].sort((a, b) => {
          // Prefer createdAt when available; fallback to ObjectId timestamp
          const aDate = a.createdAt ? new Date(a.createdAt) : new Date(parseInt(a._id.substring(0, 8), 16) * 1000);
          const bDate = b.createdAt ? new Date(b.createdAt) : new Date(parseInt(b._id.substring(0, 8), 16) * 1000);
          return bDate - aDate; // newest first
        });
        setProjects(sorted);
      });
  }, []);

  return (
    <section id="projects" className="page projects-section">
      <h2 style={{color:"#63da6b"}}>Projects</h2>
      <div className="project-grid">
        {projects.map(project => {
          const techList = Array.isArray(project.technologies)
            ? project.technologies.join(", ")
            : project.technologies || "Not specified";

          const slug = slugify(project.title || project._id);

          return (
            <div className="card project-card" key={project._id}>
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
