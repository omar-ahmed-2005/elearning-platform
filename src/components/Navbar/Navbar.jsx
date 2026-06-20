import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <span>H</span>
          <span>WeekendUX</span>
        </Link>
      </div>

      <div>
        <input type="text" placeholder="Search courses..." />
        <button type="button">Explore</button>
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to="/faq">FAQ's</Link></li>
      </ul>

      <div>
        <Link to="/login">Sign in</Link>
        <Link to="/register">Create free account</Link>
      </div>
    </nav>
  );
}

export default Navbar;
