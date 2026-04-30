import "../styles/styles.css";
import { Link } from "react-router-dom";

export default function About() {
  const skillCards = [
    {
      key: "backend",
      title: "Backend Development",
      content: "Node.js, Express.js, JAVA, MongoDB, PHP, JavaScript, SQL, C++",
      size: "wide",
    },
    {
      key: "soft",
      title: "Soft Skills",
      content:
        "Leadership, Critical Thinking, Problem Solving, Quick Learning, Project Management, Team Work, Communication, Adaptability, Experimenting",
      size: "right",
    },
    {
      key: "frontend",
      title: "Frontend Development",
      content: "React.js, Next.js, JavaScript, HTML5/CSS, Tailwind CSS, Bootstrap",
      size: "small",
    },
    {
      key: "mobile",
      title: "Mobile App Development",
      content: "Kotlin, JAVA, Android Studio",
      size: "small",
    },
    {
      key: "qa",
      title: "QA Testing",
      content: "Postman, SDLC, Test Case Writing",
      size: "right",
    },
    {
      key: "tools",
      title: "Tools",
      content: "Git, GitHub, VS Code, IntelliJ IDEA, Android Studio, Postman, Jira, Trello, Figma, Canva",
      size: "small",
    },
  ];

  return (
    <section id="about" className="about-page">
      <div className="container about-hero">
        <div className="about-hero-grid">
          <div className="about-hero-left">
            <h2 className="about-title">About Me</h2>

            <p className="about-text">
              Software Engineering undergraduate with a strong academic foundation and a passion for
              building efficient, scalable applications. Continuously learning and adapting to new
              technologies while applying theoretical concepts through practical projects. A
              collaborative team player focused on delivering quality solutions and growing as a
              professional software developer.
            </p>

            <div className="about-actions">
              <Link to="/contact" className="about-btn about-btn-primary">
                Hire Me
              </Link>
              <Link to="/projects" className="about-btn about-btn-secondary">
                My Projects
              </Link>
            </div>
          </div>

          <div className="about-hero-right">
            <div className="about-image-card">
              <img src="/photos/My2.JPG" alt="Profile" />
            </div>
          </div>
        </div>
      </div>

      <div className="container about-skills">
        <h3 className="skills-title">Skills</h3>

        <div className="skills-grid">
          <div className="skills-left">
            {/* Large overview card */}
            {(() => {
              const c = skillCards.find(s => s.key === 'backend');
              return (
                <article className="glass-card skill-card skill-card-wide">
                  <h4 className="skill-card-title">{c.title}</h4>
                  <div className="skill-tags" aria-label={`${c.title} technologies`}>
                    {c.content.split(",").map(tag => (
                      <span key={tag} className="skill-tag">{tag.trim()}</span>
                    ))}
                  </div>
                </article>
              );
            })()}

            <div className="skills-row">
              {['frontend','mobile','tools'].map(key => {
                const c = skillCards.find(s => s.key === key);
                return (
                  <article key={c.key} className="glass-card skill-card skill-card-small">
                    <h4 className="skill-card-title">{c.title}</h4>
                    <div className="skill-tags" aria-label={`${c.title} technologies`}>
                      {c.content.split(",").map(tag => (
                        <span key={tag} className="skill-tag">{tag.trim()}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="skills-right">
            {['soft','qa'].map(key => {
              const c = skillCards.find(s => s.key === key);
              return (
                <article key={c.key} className="glass-card skill-card skill-card-right">
                  <h4 className="skill-card-title">{c.title}</h4>
                  <div className="skill-tags" aria-label={`${c.title} technologies`}>
                    {c.content.split(",").map(tag => (
                      <span key={tag} className="skill-tag">{tag.trim()}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </aside>
        </div>
      </div>
    </section>
  );
}
