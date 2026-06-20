import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div>
        {/* Brand */}
        <div>
          <Link to="/">
            <span>H</span>
            <span>WeekendUX</span>
          </Link>
          <p>Top learning experiences that create more talent in the world.</p>
        </div>

        {/* Product */}
        <div>
          <h4>Product</h4>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press <span>New</span></a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4>Social</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <p>© 2022 Ed-Circle. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
