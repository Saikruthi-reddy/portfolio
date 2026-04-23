import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleContact = () => {
    setMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Announcement bar */}
        <div className="announcement-bar">
          <span>AI Engineer · Mahindra University</span>
        </div>

        {/* Main nav row */}
        <div className="navbar-main">
          <div className="navbar-brand">
            <span className="brand-name">Saikruthi</span>
            <span className="brand-sub">Portfolio</span>
          </div>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) => isActive ? 'nav-link resume-link active' : 'nav-link resume-link'}
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </NavLink>
            <a
              href="https://github.com/saikruthi-reddy"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
            <button onClick={handleContact} className="nav-link contact-link">
  Contact
</button>
          </nav>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
