import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/profile/Profile';
import UserList from './components/users/UserList';
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <Router>
          <div style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            color: '#333',
            backgroundColor: '#f8f9fa',
            minHeight: '100vh'
          }}>
            <Navbar />
            <div style={{ 
              padding: '20px', 
              maxWidth: '800px', 
              margin: '0 auto',
              marginTop: '20px'
            }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/users" element={<UserList />} />
              </Routes>
            </div>
          </div>
        </Router>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;