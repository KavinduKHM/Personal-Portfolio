import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="home" className="hero">
  <div className="hero-left">
    <h1>Your Name Here</h1>
    <p>
      Intro text: Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <a href="#projects" className="hero-btn">Let's get started →</a>
  </div>

  <div className="hero-right">
    <img src="/photos/My2.jpg" alt="Profile" />
  </div>
</section>
  );
}
