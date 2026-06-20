import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../image/login.jpg';
import '../auth.css';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pull the account that was saved when the user registered
    const stored = localStorage.getItem('weekendux_user');
    if (!stored) {
      setError('No account found. Please register first.');
      return;
    }

    const user = JSON.parse(stored);
    if (user.email !== form.email || user.password !== form.password) {
      setError('Incorrect email or password.');
      return;
    }

    // Keep a lightweight session so other pages can greet the user by name
    localStorage.setItem('weekendux_session', JSON.stringify({
      email: user.email,
      fullName: user.fullName,
      rememberMe,
    }));

    navigate('/');
  };

  const EyeIcon = ({ visible }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {visible ? (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </>
      ) : (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );

  return (
    <div className="auth-page-container">
      <div className="auth-card">

        <div className="auth-left-panel">
          <img src={loginImg} alt="Students in a classroom" className="auth-image-login" />
        </div>

        <div className="auth-right-panel">
          <p className="auth-welcome-text">Welcome back! Please login to your account.</p>

          <div className="auth-tab-toggle">
            <Link to="/login" className="auth-tab active">Login</Link>
            <Link to="/register" className="auth-tab">Signup</Link>
          </div>

          {error && (
            <p style={{ color: '#e53e3e', fontSize: '13px', marginBottom: '10px', textAlign: 'center' }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="auth-form" noValidate>

            <div className="auth-input-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="something@gmail.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="auth-input-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
            </div>

            <div className="auth-form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="auth-submit-btn">Login</button>

            <div className="auth-social-login">
              <button type="button" className="social-btn">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="Google" width="18" height="18"
                />
                Login with Google
              </button>
              <button type="button" className="social-btn">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                  alt="Facebook" width="18" height="18"
                />
                Login with Facebook
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
