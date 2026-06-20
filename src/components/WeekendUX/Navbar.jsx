import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../image/image 2.jpg';

// ─── Helper: generates className for NavLink based on active state ───
const navLinkClass = ({ isActive }) => isActive ? 'active' : '';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Weekend UX Logo" />
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      <div className={`nav-left ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="search-explore-container">
          <div className="search-part">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Want to learn?" aria-label="Search courses" />
          </div>
          <div className="divider"></div>
          <Link to="#" className="explore-text">
            Explore <i className="fas fa-chevron-down"></i>
          </Link>
        </div>
      </div>

      {/* ── Nav links: NavLink automatically applies .active on the matched route ── */}
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={navLinkClass} onClick={closeMobileMenu} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navLinkClass} onClick={closeMobileMenu}>
            About us
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses" className={navLinkClass} onClick={closeMobileMenu}>
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navLinkClass} onClick={closeMobileMenu}>
            Contact us
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className={navLinkClass} onClick={closeMobileMenu}>
            FAQ's
          </NavLink>
        </li>
      </ul>

      <div className={`nav-right ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/login" className="sign-in" onClick={closeMobileMenu}>Sign in</Link>
        <Link to="/register" className="create-btn" onClick={closeMobileMenu}>Create free account</Link>
      </div>
    </nav>
  );
}
