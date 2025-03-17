import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const { username, email, password, password2 } = formData;
  
  const [formErrors, setFormErrors] = useState({});
  const { register, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    
    if (password !== password2) {
      errors.password2 = 'Passwords do not match';
    }
    
    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    if (validateForm()) {
      const success = await register({
        username,
        email,
        password
      });
      
      if (success) {
        navigate('/');
      }
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
      }}>Register</h2>
      
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
            type="text"
            placeholder="Username"
            name="username"
            value={username}
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
        <div style={{ marginBottom: '16px' }}>
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
              border: formErrors.password ? '1px solid #e41e3f' : '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '15px',
              boxSizing: 'border-box'
            }}
          />
          {formErrors.password && (
            <div style={{ color: '#e41e3f', fontSize: '13px', marginTop: '5px', paddingLeft: '5px' }}>
              {formErrors.password}
            </div>
          )}
        </div>
        <div style={{ marginBottom: '25px' }}>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            style={{ 
              width: '100%', 
              padding: '12px 15px', 
              border: formErrors.password2 ? '1px solid #e41e3f' : '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '15px',
              boxSizing: 'border-box'
            }}
          />
          {formErrors.password2 && (
            <div style={{ color: '#e41e3f', fontSize: '13px', marginTop: '5px', paddingLeft: '5px' }}>
              {formErrors.password2}
            </div>
          )}
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
          Register
        </button>
        
        <div style={{ 
          textAlign: 'center',
          padding: '15px 0 0 0',
          borderTop: '1px solid #eee',
          marginTop: '25px'
        }}>
          <p style={{ color: '#666', fontSize: '14px' }}>
            Already have an account? <Link to="/login" style={{ color: '#1877f2', textDecoration: 'none', fontWeight: 'bold' }}>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;