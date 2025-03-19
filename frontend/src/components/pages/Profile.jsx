import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Please log in to view your profile</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center mb-4">
          <img
            src={user.avatar || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-avatar me-3"
          />
          <div>
            <h4 className="card-title mb-1">{user.name}</h4>
            <p className="text-muted mb-0">{user.email}</p>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Posts</h5>
                <p className="card-text h3">{user.posts?.length || 0}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Following</h5>
                <p className="card-text h3">{user.following?.length || 0}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">Followers</h5>
                <p className="card-text h3">{user.followers?.length || 0}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h5 className="card-title mb-0">Recent Posts</h5>
          </div>
          <div className="card-body">
            {user.posts && user.posts.length > 0 ? (
              user.posts.map((post) => (
                <div key={post._id} className="border-bottom pb-3 mb-3">
                  <p className="card-text">{post.content}</p>
                  <small className="text-muted">
                    Posted on {new Date(post.createdAt).toLocaleDateString()}
                  </small>
                </div>
              ))
            ) : (
              <p className="text-muted">No posts yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 