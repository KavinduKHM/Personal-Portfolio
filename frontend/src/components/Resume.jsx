import "../styles/styles.css";
import { Link } from "react-router-dom";

export default function Resume() {
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
    <section className="page resume-page">
      <div className="container">
        <div className="page-grid resume-grid">
          <main>
            <h2>Resume</h2>

            <div className="glass-card card" style={{ marginBottom: 20 }}>
              <h3 style={{ marginBottom: 12 }}>Certifications</h3>
              <ul>
                <li>SLIIT Dean’s List Award 1st Year 1st Semester (2024) | GPA - 3.8</li>
                <li>SLIIT Dean’s List Award 1st Year 2nd Semester (2024) | GPA - 3.96</li>
                <li>SLIIT Dean’s List Award 2nd Year 1st Semester (2025) | GPA - 4.0</li>
                <li>SLIIT Dean’s List Award 2nd Year 2nd Semester (2025) | GPA - 3.77</li>
                <li>Web Design for Beginners – University of Moratuwa</li>
                <li>Front End Web Development – University of Moratuwa</li>
                <li>Python for Beginners – University of Moratuwa</li>
                <li>Python Programming – University of Moratuwa</li>

              </ul>
            </div>

            <div className="glass-card card" style={{ marginBottom: 20 }}>
              <h3 style={{ marginBottom: 12 }}>Education</h3>
              <ul>
                <li> Bsc(hons) in Information Technology Specialization in Software Engineering (Undergraduate)</li>
                <li> <b>Cumulative GPA – 3.89/4.00</b></li>
              </ul>
            </div>

            
          </main>

          <aside>
            <div className="glass-card card" style={{ marginBottom: 20 }}>
              <h3 style={{ marginBottom: 12 }}>View / Download CV</h3>
              <p style={{ color: "var(--text-light)", marginBottom: 16 }}>
                Click to open or download the PDF version of my CV. The CV includes detailed information about my education, skills, certifications, and experience.
              </p>
              <div className="resume-cv-btns">
                <a href="/photos/resume.pdf" target="_blank" rel="noreferrer" className="hero-btn hero-btn-secondary" style={{ textDecoration: "none" }}>
                  View CV
                </a>
                <a href="/photos/resume.pdf" download className="hero-btn hero-btn-primary" style={{ textDecoration: "none" }}>
                  Download CV
                </a>
              </div>
            </div>

            <div className="glass-card card">
              <h3 style={{ marginBottom: 12 }}>Skills</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {skillCards.map((c) => (
                  <article key={c.key} className="glass-card skill-card" style={{ padding: 12 }}>
                    <h4 className="skill-card-title">{c.title}</h4>
                    <div className="skill-tags" aria-label={`${c.title} technologies`}>
                      {c.content.split(",").map((tag) => (
                        <span key={tag} className="skill-tag">{tag.trim()}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
