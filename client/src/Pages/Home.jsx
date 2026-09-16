import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.pageContainer}>
      <style>{`
        @keyframes starryTwinkle {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.8; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
        .star-field {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(1.5px 1.5px at 10px 30px, #ffffff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 40px 70px, #6366f1, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #a855f7, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 160px 120px, #ffffff, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 250px 250px;
          animation: starryTwinkle 5s infinite ease-in-out;
          pointer-events: none;
        }
      `}</style>

      <div style={styles.purpleOrb}></div>
      <div style={styles.blueOrb}></div>
      <div className="star-field"></div>

      <header style={styles.header}>
        <div style={styles.brandGroup}>
          <span style={styles.logoText}>APS Tracker</span>
          <span style={styles.subText}>- GL BAJAJ MATHURA -</span>
        </div>

        <nav style={styles.navCapsule}>
          <Link to="/" style={{ ...styles.navItem, ...styles.navItemActive }}>Home</Link>
          <Link to="/leaderboard" style={styles.navItem}>Leaderboard</Link>
          <Link to="/subjects" style={styles.navItem}>Subjects</Link>
          <Link to="/search" style={styles.navItem}>Search</Link>
          <Link to="/overpower" style={styles.navItem}>OverPower</Link>
        </nav>

        <Link to="/login" style={styles.topRightBtn}>
          ☁ Upload Result
        </Link>
      </header>

      <main style={styles.heroSection}>
        <div style={styles.badge}>
          GL BAJAJ GROUP OF INSTITUTIONS, MATHURA
        </div>

        <h1 style={styles.mainTitle}>
          APS Tracker
        </h1>

        <p style={styles.batchSubtitle}>Only for 2024–2028 Batch :)</p>

        <p style={styles.desc}>
          Your academic leaderboard, report card tracker, and analytics hub — all in one place.
        </p>

        <div style={styles.buttonGroup}>
          <Link to="/leaderboard" style={styles.primaryBtn}>
            🎗 View Leaderboard →
          </Link>
          <Link to="/login" style={styles.secondaryBtn}>
            ☁ Upload Result PDF
          </Link>
        </div>

        <div style={styles.cardsHeader}>
          <span style={styles.liveDot}></span>
          <span style={styles.liveText}>LIVE BATCH PERFORMANCE</span>
          <span style={styles.yearText}>2024-28</span>
        </div>

        <div style={styles.cardsGrid}>
          <div style={styles.glassCard}></div>
          <div style={styles.glassCard}></div>
          <div style={styles.glassCard}></div>
          <div style={styles.glassCard}></div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#0a0817',
    color: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Inter', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  purpleOrb: {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, rgba(10, 8, 23, 0) 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  blueOrb: {
    position: 'absolute',
    top: '5%',
    left: '20%',
    width: '450px',
    height: '350px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(10, 8, 23, 0) 70%)',
    pointerEvents: 'none',
    zIndex: 0,
  },
  header: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 40px',
  },
  brandGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '800',
    fontStyle: 'italic',
    background: 'linear-gradient(90deg, #a855f7, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subText: {
    fontSize: '9px',
    color: '#94a3b8',
    letterSpacing: '1px',
    fontWeight: '600',
  },
  navCapsule: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '40px',
    padding: '6px 24px',
  },
  navItem: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '500',
  },
  navItemActive: {
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '5px 14px',
    borderRadius: '20px',
  },
  topRightBtn: {
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '600',
    boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
  },
  heroSection: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '40px',
    padding: '0 20px',
  },
  badge: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#818cf8',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.25)',
    padding: '6px 16px',
    borderRadius: '20px',
    marginBottom: '25px',
  },
  mainTitle: {
    fontSize: '76px',
    fontWeight: '900',
    margin: 0,
    background: 'linear-gradient(90deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
    lineHeight: '1.1',
  },
  batchSubtitle: {
    fontSize: '14px',
    color: '#a855f7',
    fontStyle: 'italic',
    marginTop: '10px',
    marginBottom: '15px',
  },
  desc: {
    fontSize: '15px',
    color: '#94a3b8',
    maxWidth: '550px',
    lineHeight: '1.5',
    marginBottom: '35px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    marginBottom: '60px',
  },
  primaryBtn: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    padding: '12px 26px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 4px 20px rgba(79, 70, 229, 0.4)',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#ffffff',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    padding: '12px 26px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    backdropFilter: 'blur(10px)',
  },
  cardsHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    maxWidth: '1100px',
    marginBottom: '15px',
  },
  liveDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    boxShadow: '0 0 8px #22c55e',
  },
  liveText: {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#cbd5e1',
  },
  yearText: {
    fontSize: '12px',
    color: '#64748b',
    marginLeft: 'auto',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '18px',
    width: '100%',
    maxWidth: '1100px',
  },
  glassCard: {
    height: '140px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    backdropFilter: 'blur(16px)',
  },
};

export default Home;