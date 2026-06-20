import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../image/register.jpg';
import '../auth.css';
import './Register.css';
import emailjs from '@emailjs/browser';

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Save to localStorage so the Login page can validate against it
    localStorage.setItem('weekendux_user', JSON.stringify({
      fullName: form.fullName,
      email: form.email,
      password: form.password,
    }));
    emailjs.send(
  'service_0uwyt6t',
  'template_muf19to',
  {
    name: form.fullName,
    email: form.email,
    password: form.password,
  },
  'ikv--G0-gjpHY12ZU'
)
.then(() => {
  console.log('Email sent successfully');
})
.catch((error) => {
  console.log('Email error:', error);
});

    navigate('/login');
  };

  // Shared between both password fields to avoid duplicating the SVG
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
          <img src={registerImg} alt="Students collaborating" className="auth-image" />
        </div>

        <div className="auth-right-panel">
          <p className="auth-welcome-text">Welcome! Create your free account below.</p>

          <div className="auth-tab-toggle">
            <Link to="/login" className="auth-tab">Login</Link>
            <Link to="/register" className="auth-tab active">Signup</Link>
          </div>

          {error && (
            <p style={{ color: '#e53e3e', fontSize: '13px', marginBottom: '10px', textAlign: 'center' }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="auth-form" noValidate>

            <div className="auth-input-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={form.fullName}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

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
                  placeholder="Min. 6 characters"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
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

            <div className="auth-input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                >
                  <EyeIcon visible={showConfirmPassword} />
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn" style={{ marginTop: '8px' }}>
              Create Account
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Register;
