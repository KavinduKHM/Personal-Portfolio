import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(o => !o);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <h2 className="logo">Kavindu</h2>

      <button
        className="navbar-toggle"
        type="button"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={open ? "navbar-links open" : "navbar-links"}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}
