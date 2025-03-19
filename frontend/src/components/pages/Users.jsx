import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="card">
        <div className="card-body text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title mb-0">Users</h5>
      </div>
      <div className="card-body">
        <div className="row">
          {users.map((user) => (
            <div key={user._id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <img
                      src={user.avatar || 'https://via.placeholder.com/50'}
                      alt={user.name}
                      className="post-avatar me-3"
                    />
                    <div>
                      <h6 className="card-title mb-1">{user.name}</h6>
                      <p className="card-text small text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users; 