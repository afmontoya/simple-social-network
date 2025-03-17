import React, { useState, useContext } from 'react';
import PostContext from '../../context/PostContext';

const Home = () => {
  const { posts, createPost, likePost } = useContext(PostContext);
  const [postContent, setPostContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim() === '') return;
    
    createPost(postContent);
    setPostContent(''); // Clear the input after posting
  };
  
  const formatDate = (dateString) => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInHours = Math.round((now - postDate) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours === 1) {
      return '1 hour ago';
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return postDate.toLocaleDateString();
    }
  };
  
  return (
    <div>
      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        padding: '20px', 
        marginBottom: '25px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ 
          margin: '0 0 15px 0', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#444'
        }}>Create Post</h3>
        <form onSubmit={handleSubmit}>
          <textarea 
            placeholder="What's on your mind?" 
            style={{ 
              width: '100%', 
              padding: '15px', 
              marginBottom: '15px', 
              borderRadius: '8px', 
              border: '1px solid #ddd',
              fontSize: '15px',
              fontFamily: 'inherit',
              resize: 'none'
            }}
            rows="3"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          ></textarea>
          <button 
            type="submit"
            style={{ 
              padding: '10px 20px', 
              backgroundColor: '#1877f2', 
              color: 'white', 
              border: 'none', 
              borderRadius: '20px', 
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            Post
          </button>
        </form>
      </div>
      
      {posts.length === 0 ? (
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '20px', 
          textAlign: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <p style={{ color: '#666' }}>No posts yet. Be the first to share something!</p>
        </div>
      ) : (
        posts.map(post => (
          <div key={post.id} style={{ 
            background: 'white', 
            borderRadius: '12px', 
            padding: '20px', 
            marginBottom: '20px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ 
                width: '45px', 
                height: '45px', 
                borderRadius: '50%', 
                backgroundColor: '#f0f2f5', 
                marginRight: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#1877f2'
              }}>
                {post.user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '15px' }}>{post.user.username}</div>
                <div style={{ fontSize: '13px', color: '#65676b' }}>{formatDate(post.createdAt)}</div>
              </div>
            </div>
            <p style={{ 
              margin: '0 0 15px 0',
              fontSize: '15px',
              lineHeight: '1.5'
            }}>{post.content}</p>
            <div style={{ 
              marginTop: '15px', 
              paddingTop: '15px',
              borderTop: '1px solid #eee',
              display: 'flex'
            }}>
              <button 
                onClick={() => likePost(post.id)}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  cursor: 'pointer', 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px',
                  color: post.likes > 0 ? '#1877f2' : '#65676b',
                  transition: 'background 0.2s',
                  flex: 1,
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#f0f2f5'}
                onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              >
                👍 Like{post.likes > 0 ? ` · ${post.likes}` : ''}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;