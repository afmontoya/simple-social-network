import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{
      background: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      padding: '15px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <Link to="/" style={{
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#1877f2', // Facebook blue for familiarity
          textDecoration: 'none',
        }}>
          SimpleSocial
        </Link>
        
        <div>
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/" style={{
                color: '#444',
                textDecoration: 'none',
                marginRight: '20px',
                fontWeight: 500
              }}>
                Feed
              </Link>
              <Link to="/users" style={{
                color: '#444',
                textDecoration: 'none',
                marginRight: '20px',
                fontWeight: 500
              }}>
                People
              </Link>
              {user && (
                <Link to={`/profile/${user._id}`} style={{
                  color: '#444',
                  textDecoration: 'none',
                  marginRight: '20px',
                  fontWeight: 500
                }}>
                  Profile
                </Link>
              )}
              <button onClick={handleLogout} style={{
                background: '#f0f2f5',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: 'bold',
                color: '#444',
                cursor: 'pointer'
              }}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" style={{
                color: '#444',
                textDecoration: 'none',
                marginRight: '15px',
                fontWeight: 500
              }}>
                Login
              </Link>
              <Link to="/register" style={{
                background: '#1877f2',
                color: 'white',
                textDecoration: 'none',
                padding: '8px 16px',
                borderRadius: '20px',
                fontWeight: 'bold'
              }}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;