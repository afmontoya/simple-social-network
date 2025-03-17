import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  
  const { login, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const success = await login(formData);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '40px auto',
      padding: '30px',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        margin: '0 0 25px 0',
        color: '#1877f2',
        fontSize: '28px'
      }}>Login</h2>
      
      {error && (
        <div style={{ 
          color: '#e41e3f', 
          background: '#ffebe9',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px', 
          textAlign: 'center',
          fontSize: '14px'
        }}>
          {error}
        </div>
      )}
      
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
            style={{ 
              width: '100%', 
              padding: '12px 15px', 
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '15px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            required
            style={{ 
              width: '100%', 
              padding: '12px 15px', 
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '15px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '12px 15px', 
            backgroundColor: '#1877f2', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
        
        <div style={{ 
          marginTop: '20px', 
          textAlign: 'center',
          padding: '15px 0 0 0',
          borderTop: '1px solid #eee',
          marginTop: '25px'
        }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Don't have an account? <Link to="/register" style={{ color: '#1877f2', textDecoration: 'none', fontWeight: 'bold' }}>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;