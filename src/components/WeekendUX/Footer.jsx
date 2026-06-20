import React from 'react';
import logoImg from '../../image/image 2.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__info">
            <h2 className="footer__brand">
              <img src={logoImg} alt="Weekend UX Logo" className="footer__logo-img" />
            </h2>
            <p className="footer__description">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Product</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Overview</a></li>
              <li><a href="#" className="footer__link">Features</a></li>
              <li><a href="#" className="footer__link">Solutions</a></li>
              <li><a href="#" className="footer__link">Tutorials</a></li>
              <li><a href="#" className="footer__link">Pricing</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">About us</a></li>
              <li><a href="#" className="footer__link">Careers</a></li>
              <li>
                <a href="#" className="footer__link footer__link--flex">
                  Press <span className="footer__badge">New</span>
                </a>
              </li>
              <li><a href="#" className="footer__link">News</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Social</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Twitter</a></li>
              <li><a href="#" className="footer__link">LinkedIn</a></li>
              <li><a href="#" className="footer__link">GitHub</a></li>
              <li><a href="#" className="footer__link">Dribbble</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4 className="footer__heading">Legal</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Terms</a></li>
              <li><a href="#" className="footer__link">Privacy</a></li>
              <li><a href="#" className="footer__link">Cookies</a></li>
              <li><a href="#" className="footer__link">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2022 Ed-Circle. All rights reserved.</p>
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="footer__social-link" aria-label="Google Maps">
              <i className="fa-solid fa-map-location-dot"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
