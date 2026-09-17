import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Server connection failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <style>{`
        * { box-sizing: border-box; }
        body, html { margin: 0; padding: 0; background-color: #ffffff; }

        .nav-link {
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #7c3aed; }

        .module-card {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .module-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px -10px rgba(124, 58, 237, 0.15);
        }

        .btn-purple {
          background-color: #7c3aed;
          color: #ffffff;
          transition: all 0.2s ease;
        }
        .btn-purple:hover {
          background-color: #6d28d9;
          transform: translateY(-1px);
        }

        .input-field:focus {
          border-color: #7c3aed !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }
      `}</style>

      {/* TOP NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <div style={styles.logoGroup}>
            <div style={styles.logoIcon}>🎓</div>
            <span style={styles.brandName}>
              College <span style={{ color: '#7c3aed' }}>Placement Portal</span>
            </span>
          </div>

          <div style={styles.navLinks}>
            <a href="#courses" className="nav-link">Courses</a>
            <a href="#placement" className="nav-link">Placement Training</a>
            <a href="#resources" className="nav-link">Resources ▾</a>
          </div>

          <div style={styles.navActions}>
            <div style={styles.aiBadge}>✨ AI Mock Interview</div>
            <button className="btn-purple" style={styles.navLoginBtn}>Portal Access</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main style={styles.heroSection}>
        <div style={styles.heroGrid}>
          
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>
              Your One-Stop Destination <br />
              for <span style={{ color: '#7c3aed' }}>Campus Placements!</span>
            </h1>
            <p style={styles.heroSub}>
              Your Ultimate Hub for Campus Placements & Tech Prep. Master cutting-edge skills with expert-led, AI-powered modules and land your dream job fast.
            </p>

            <div style={styles.featureGrid}>
              <div className="module-card" style={{ ...styles.moduleCard, backgroundColor: '#dbeafe' }}>
                <div>
                  <h4 style={styles.cardHeader}>Tech Roadmaps</h4>
                  <p style={styles.cardSub}>6-Month Prep (Post-Login)</p>
                </div>
                <span style={{ fontSize: '20px' }}>🗺️</span>
              </div>

              <div className="module-card" style={{ ...styles.moduleCard, backgroundColor: '#f3e8ff' }}>
                <div>
                  <h4 style={styles.cardHeader}>Courses</h4>
                  <p style={styles.cardSub}>Industry-Aligned Mentor Track</p>
                </div>
                <span style={{ fontSize: '20px' }}>📚</span>
              </div>

              <div className="module-card" style={{ ...styles.moduleCard, backgroundColor: '#dcfce7' }}>
                <div>
                  <h4 style={styles.cardHeader}>Placement Training</h4>
                  <p style={styles.cardSub}>Crack Top Tech Jobs from Campus</p>
                </div>
                <span style={{ fontSize: '20px' }}>🎓</span>
              </div>

              <div className="module-card" style={{ ...styles.moduleCard, backgroundColor: '#ffedd5' }}>
                <div>
                  <h4 style={styles.cardHeader}>1:1 Mentorship</h4>
                  <p style={styles.cardSub}>Personal Guidance by Industry Experts</p>
                </div>
                <span style={{ fontSize: '20px' }}>👨‍🏫</span>
              </div>
            </div>
          </div>

          {/* LOGIN CARD */}
          <div style={styles.heroRight}>
            <div style={styles.loginCard}>
              <div style={{ marginBottom: '24px' }}>
                <span style={styles.loginBadge}>STUDENT PORTAL</span>
                <h2 style={styles.loginTitle}>Sign In to Account</h2>
                <p style={styles.loginSub}>Enter credentials to access placement portal</p>
              </div>

              {error && <div style={styles.errorAlert}>{error}</div>}

              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@example.com"
                    required
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input-field"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    style={styles.input}
                  />
                </div>

                <button type="submit" className="btn-purple" style={styles.submitBtn} disabled={loading}>
                  {loading ? 'Logging in...' : 'Login to Dashboard →'}
                </button>
              </form>

              <p style={styles.footerText}>
                Don't have an account?{' '}
                <Link to="/register" style={styles.link}>
                  Register now
                </Link>
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  navbar: {
    height: '70px',
    borderBottom: '1px solid #f1f5f9',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    zIndex: 100,
  },
  navContainer: {
    maxWidth: '1240px',
    width: '100%',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  logoIcon: {
    backgroundColor: '#7c3aed',
    color: '#fff',
    borderRadius: '8px',
    padding: '6px 8px',
    fontSize: '14px',
  },
  brandName: {
    fontSize: '19px',
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: '-0.5px',
  },
  navLinks: {
    display: 'flex',
    gap: '28px',
    alignItems: 'center',
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  aiBadge: {
    backgroundColor: '#f5f3ff',
    border: '1px solid #ddd6fe',
    color: '#7c3aed',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
  },
  navLoginBtn: {
    padding: '8px 18px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  },
  heroSection: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '40px 24px',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '40px',
    alignItems: 'center',
  },
  heroLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  heroTitle: {
    fontSize: '40px',
    fontWeight: '900',
    color: '#0f172a',
    lineHeight: '1.18',
    margin: 0,
    letterSpacing: '-0.8px',
  },
  heroSub: {
    fontSize: '15px',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '10px',
  },
  moduleCard: {
    borderRadius: '12px',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeader: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 2px 0',
  },
  cardSub: {
    fontSize: '11.5px',
    color: '#475569',
    margin: 0,
  },
  heroRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  loginCard: {
    width: '100%',
    maxWidth: '400px',
    padding: '36px',
    borderRadius: '20px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
    backgroundColor: '#ffffff',
  },
  loginBadge: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#7c3aed',
    backgroundColor: '#f5f3ff',
    padding: '4px 10px',
    borderRadius: '12px',
    letterSpacing: '0.5px',
  },
  loginTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#0f172a',
    margin: '10px 0 4px 0',
  },
  loginSub: {
    fontSize: '13px',
    color: '#64748b',
    margin: 0,
  },
  errorAlert: {
    backgroundColor: '#fef2f2',
    color: '#ef4444',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '13px',
    marginBottom: '16px',
    border: '1px solid #fee2e2',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#334155',
  },
  input: {
    padding: '11px 14px',
    borderRadius: '10px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
  },
  submitBtn: {
    marginTop: '6px',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '14.5px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
  footerText: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '13px',
    color: '#64748b',
  },
  link: {
    color: '#7c3aed',
    fontWeight: '700',
    textDecoration: 'none',
  },
};

export default Login;