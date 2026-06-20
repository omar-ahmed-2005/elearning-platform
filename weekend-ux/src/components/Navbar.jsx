import React from 'react';
import { Search, ChevronDown, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="navbar__brand">
        <div className="navbar__logo">H</div>
        <span className="navbar__title">Weekend UX</span>
      </div>
      
      <div className="navbar__search">
        <Search size={18} className="navbar__search-icon" />
        <input type="text" placeholder="Want to learn?" className="navbar__search-input" />
        <div className="navbar__explore">
          Explore <ChevronDown size={16} />
        </div>
      </div>
      
      <ul className="navbar__nav">
        <li className="navbar__nav-item"><a href="#" className="navbar__nav-link navbar__nav-link--active">Home</a></li>
        <li className="navbar__nav-item"><a href="#" className="navbar__nav-link">About us</a></li>
        <li className="navbar__nav-item"><a href="#" className="navbar__nav-link">Courses</a></li>
        <li className="navbar__nav-item"><a href="#" className="navbar__nav-link">Contact us</a></li>
        <li className="navbar__nav-item"><a href="#" className="navbar__nav-link">FAQ's</a></li>
      </ul>
      
      <div className="navbar__actions">
        <a href="#" className="navbar__signin">Sign in</a>
        <button className="navbar__btn">Create free account</button>
      </div>
      
      <div className="navbar__mobile-toggle">
        <Menu size={28} />
      </div>
    </nav>
  );
}
