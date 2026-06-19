import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">KH</div>
        <div className="footer-copy">© {new Date().getFullYear()} Kavindu Hewamaddumage. Built for precision.</div>
        <div className="footer-links">
          <a href="https://github.com/KavinduKHM" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kavindukh/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} aria-label="Twitter link placeholder">
            Twitter
          </a>
          <a href="mailto:kavinduhewamadduma@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
