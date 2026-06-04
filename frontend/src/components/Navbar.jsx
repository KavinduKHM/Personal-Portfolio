import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/styles.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
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

        {/* Desktop nav */}
        <nav className="nav-center nav-desktop" aria-label="Primary navigation">
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
          <a href="/contact" className="talk-btn nav-desktop">Let's talk ↗</a>
          {/* Hamburger */}
          <button
            className="hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span className={`ham-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-bar ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-drawer glass-strong"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile navigation"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <span className={isActive ? 'mobile-nav-text active' : 'mobile-nav-text'}>
                    {l.label}
                  </span>
                )}
              </NavLink>
            ))}
            <a href="/contact" className="btn-primary-gradient mobile-talk-btn" onClick={() => setMenuOpen(false)}>
              Let's talk ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
