import "../styles/styles.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          Software Engineering undergraduate with a strong academic foundation 
          and a passion for building efficient, scalable applications. Continuously 
          learning and adapting to new technologies while applying theoretical 
          concepts through practical projects. A collaborative team player focused
          on delivering quality solutions and growing as a professional software developer.
        </p>

        <h3 className="skills-title">Skills</h3>

        <div className="skills">
          <p>
            <strong>Backend Development</strong> - Node.js, Express.js, JAVA,
            MongoDB, PHP, JavaScript, SQL, C++
          </p>

          <p>
            <strong>Frontend Development</strong> - React.js, Next.js,
            JavaScript, HTML5/CSS, Tailwind CSS, Bootstrap
          </p>

          <p>
            <strong>Mobile App Development</strong> - Kotlin, JAVA, Android Studio
          </p>

          <p>
            <strong>QA Testing</strong> - Postman, SDLC, Test Case Writing
          </p>

          <p>
            <strong>Tools</strong> - Git, GitHub, VS Code, IntelliJ IDEA,
            Android Studio, Postman, Jira, Trello, Figma, Canva
          </p>

          <p>
            <strong>Soft Skills</strong> - Leadership, Critical Thinking, Problem Solving, Quick Learning, Project Management,
             Team Work, Communication, Adaptability, Experimenting
          </p>
        </div>
      </div>

      <div className="about-right">
        <img src="/photos/My2.JPG" alt="Profile" />
      </div>
    </section>
  );
}
