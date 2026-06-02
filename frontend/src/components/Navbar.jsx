import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/styles.css";

export default function Navbar() {
  const [time, setTime] = useState(() => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  const links = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container glass">
        <div className="nav-left">
          <div className="logo-circle" aria-hidden>
            <span className="logo-text">KH</span>
          </div>
        </div>

        <nav className="nav-center" aria-label="Primary navigation">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className="nav-link">
              {({ isActive }) => (
                <span className="nav-link-inner">
                  {isActive && (
                    <motion.span layoutId="activeNavPill" className="nav-active-pill" />
                  )}
                  <span className={isActive ? 'nav-link-text active' : 'nav-link-text'}>{l.label}</span>
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="nav-right">
          <a href="/contact" className="talk-btn">Let's talk ↗</a>
        </div>
      </div>
    </header>
  );
}
