import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './components/profile/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import Users from './pages/Users';
import './index.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-vh-100 bg-light">
          <Navbar />
          <div className="container py-4">
            <div className="row">
              {/* Left Sidebar */}
              <div className="col-md-3 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Navigation</h5>
                  </div>
                  <div className="card-body p-0">
                    <div className="list-group list-group-flush">
                      <a href="/" className="list-group-item list-group-item-action">
                        <i className="bi bi-house-door me-2"></i>Home
                      </a>
                      <a href="/profile" className="list-group-item list-group-item-action">
                        <i className="bi bi-person me-2"></i>Profile
                      </a>
                      <a href="/users" className="list-group-item list-group-item-action">
                        <i className="bi bi-people me-2"></i>Users
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-md-6">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  } />
                  <Route path="/profile/edit" element={
                    <PrivateRoute>
                      <EditProfile />
                    </PrivateRoute>
                  } />
                  <Route path="/users" element={
                    <PrivateRoute>
                      <Users />
                    </PrivateRoute>
                  } />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </div>

              {/* Right Sidebar */}
              <div className="col-md-3 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Trending Topics</h5>
                  </div>
                  <div className="card-body p-0">
                    <div className="list-group list-group-flush">
                      <a href="#" className="list-group-item list-group-item-action">
                        #Technology
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        #Programming
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        #WebDevelopment
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        #JavaScript
                      </a>
                      <a href="#" className="list-group-item list-group-item-action">
                        #React
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;