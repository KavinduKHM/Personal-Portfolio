import { NavLink } from "react-router-dom";
import "../styles/styles.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">Kavindu</h2>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
