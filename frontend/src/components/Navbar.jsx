import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo-circle" aria-hidden>
              <span className="logo-text">KH</span>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="nav-center nav-desktop" aria-label="Primary navigation">
          <LayoutGroup>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className="nav-link">
                {({ isActive }) => (
                  <span className="nav-link-inner">
                    {isActive && (
                      <motion.span layout layoutId="activeNavPill" className="nav-active-pill" />
                    )}
                    <span className={isActive ? 'nav-link-text active' : 'nav-link-text'}>{l.label}</span>
                  </span>
                )}
              </NavLink>
            ))}
          </LayoutGroup>
        </nav>

        <div className="nav-right">
          <a href="/photos/CV- Kavindu Hewamaddumage.pdf" download className="nav-desktop" style={{
            background: 'linear-gradient(90deg, #34d399 0%, #06b6d4 100%)',
            color: '#050810',
            boxShadow: '0 12px 36px rgba(34, 211, 153, 0.14)',
            borderRadius: '999px',
            fontWeight: '700',
            padding: '6px 14px',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '15px',
            transition: 'transform 160ms ease'
          }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            Download CV 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
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
            <a href="/photos/resume.pdf" download className="mobile-talk-btn" onClick={() => setMenuOpen(false)} style={{ 
              background: 'linear-gradient(90deg, #34d399 0%, #06b6d4 100%)',
              color: '#050810',
              boxShadow: '0 12px 36px rgba(34, 211, 153, 0.14)',
              borderRadius: '999px',
              fontWeight: '700',
              padding: '12px 20px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '16px',
              marginTop: '12px'
            }}>
              Download CV 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
