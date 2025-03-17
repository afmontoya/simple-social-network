import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  // Sample data - in a real app this would come from your API
  const users = [
    { id: '1', username: 'user1', bio: 'This is user 1 bio' },
    { id: '2', username: 'user2', bio: 'This is user 2 bio' },
    { id: '3', username: 'user3', bio: 'This is user 3 bio' },
    { id: '4', username: 'user4', bio: 'This is user 4 bio' },
    { id: '5', username: 'user5', bio: 'This is user 5 bio' },
  ];
  
  return (
    <div>
      <h2 style={{ 
        fontSize: '24px', 
        fontWeight: '700', 
        marginBottom: '25px',
        color: '#444'
      }}>Discover People</h2>
      
      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        padding: '5px', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        {users.map(user => (
          <div key={user.id} style={{ 
            padding: '15px 20px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: user.id !== users[users.length - 1].id ? '1px solid #f0f2f5' : 'none'
          }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              backgroundColor: '#f0f2f5', 
              marginRight: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#1877f2',
              fontSize: '20px'
            }}>
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div style={{ flexGrow: 1 }}>
              <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '16px', fontWeight: '600' }}>{user.username}</h3>
              </Link>
              <p style={{ margin: 0, color: '#65676b', fontSize: '14px' }}>{user.bio}</p>
            </div>
            <button style={{ 
              padding: '8px 16px',
              backgroundColor: '#e7f3ff', 
              color: '#1877f2', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;