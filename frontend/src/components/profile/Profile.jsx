import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#ddd', marginRight: '20px' }}></div>
        <div>
          <h2>Username</h2>
          <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div>
            <span style={{ marginRight: '15px' }}>
              <strong>10</strong> Posts
            </span>
            <span style={{ marginRight: '15px' }}>
              <strong>120</strong> Followers
            </span>
            <span>
              <strong>45</strong> Following
            </span>
          </div>
          <button style={{ marginTop: '10px', padding: '5px 15px', backgroundColor: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Follow
          </button>
        </div>
      </div>
      
      <h3>Posts</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div key={item} style={{ aspectRatio: '1', backgroundColor: '#eee', borderRadius: '5px' }}></div>
        ))}
      </div>
    </div>
  );
};

export default Profile;