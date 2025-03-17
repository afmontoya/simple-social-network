import React, { createContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  // Since we're facing connection issues with the backend,
  // we'll use a local state to simulate post creation for now
  const [posts, setPosts] = useState([
    {
      id: '1',
      content: 'This is a sample post showing what content would look like in our social network!',
      user: { id: '1', username: 'User123', profileImage: null },
      likes: 12,
      createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
    },
    {
      id: '2',
      content: "Here's another example post that might appear in your social network feed!",
      user: { id: '2', username: 'AnotherUser', profileImage: null },
      likes: 5,
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString() // 5 hours ago
    }
  ]);
  
  // Create a new post (local implementation)
  const createPost = (content) => {
    const newPost = {
      id: Date.now().toString(),
      content,
      user: { id: 'current-user', username: 'You', profileImage: null },
      likes: 0,
      createdAt: new Date().toISOString()
    };
    
    setPosts([newPost, ...posts]);
    return true;
  };
  
  // Like a post (local implementation)
  const likePost = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
    return true;
  };
  
  return (
    <PostContext.Provider
      value={{
        posts,
        createPost,
        likePost
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;