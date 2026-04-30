import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(o => !o);
  const closeMenu = () => setOpen(false);

  const navLinkClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <header className="navbar">
      <NavLink to="/" end className="logo" onClick={closeMenu} aria-label="Home">
        KH
      </NavLink>

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

      <div className={open ? "navbar-right open" : "navbar-right"}>
        <nav className="navbar-links" aria-label="Primary">
          <NavLink to="/" end onClick={closeMenu} className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <NavLink to="/contact" className="navbar-cta" onClick={closeMenu}>
          Let's get started
        </NavLink>
      </div>
    </header>
  );
}
