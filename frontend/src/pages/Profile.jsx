import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <img
                  src={user?.profilePhoto || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="rounded-circle me-3"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <div>
                  <h2 className="card-title mb-1">{user?.username}</h2>
                  <p className="text-muted mb-0">{user?.email}</p>
                </div>
              </div>
              <div className="mb-4">
                <h4>About</h4>
                <p className="card-text">
                  {user?.bio || 'No bio yet. Add one to tell others about yourself!'}
                </p>
              </div>
              <div className="mb-4">
                <h4>Location</h4>
                <p className="card-text">
                  {user?.location || 'No location set'}
                </p>
              </div>
              <div className="mb-4">
                <h4>Website</h4>
                <p className="card-text">
                  {user?.website ? (
                    <a href={user.website} target="_blank" rel="noopener noreferrer">
                      {user.website}
                    </a>
                  ) : (
                    'No website set'
                  )}
                </p>
              </div>
              <button 
                className="btn btn-primary"
                onClick={handleEditProfile}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 