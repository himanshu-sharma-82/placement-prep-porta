import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', background: '#1e293b', color: '#fff' }}>
      <h2 style={{ margin: 0 }}>Placement Portal</h2>
      <div>
        {token ? (
          <>
            <span style={{ marginRight: '15px' }}>Welcome, {user?.name} ({user?.role})</span>
            <button onClick={handleLogout} style={{ padding: '6px 12px', cursor: 'pointer', background: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: '#fff', marginRight: '15px', textDecoration: 'none' }}>Login</Link>
            <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;