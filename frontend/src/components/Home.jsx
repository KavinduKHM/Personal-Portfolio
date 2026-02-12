import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="hero">
  <div className="hero-left">
    <h1>Kavindu Hewamaddumage</h1>
    <p>
      Software Engineering undergraduate with a strong academic background and hands-on experience in
      software development, programming, and problem-solving. Familiar with object-oriented programming,
      data structures, algorithms, and web application development through academic and personal projects.
      Proficient in applying theoretical concepts to practical implementations, including building, testing, and
      debugging applications. Demonstrates a strong willingness to learn new technologies, collaborate in teambased development environments, and contribute effectively as a Software Engineering Intern. Familiar with
      Git, REST APIs, databases, and Agile development practices. 

    </p>
    <Link to="/about" className="hero-btn">Let's get started →</Link>
  </div>

  <div className="hero-right">
    <img src="photos/My2.jpg" alt="Profile" />
  </div>
</section>
  );
}
