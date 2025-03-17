import React, { useState, useContext } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Paper,
  Alert
} from '@mui/material';
import PostContext from '../../context/PostContext';

const PostForm = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const { createPost } = useContext(PostContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (content.trim() === '') {
      setError('Post cannot be empty');
      return;
    }
    
    const success = await createPost({ content });
    
    if (success) {
      setContent('');
      setError('');
    } else {
      setError('Error creating post. Please try again.');
    }
  };

  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
        >
          Post
        </Button>
      </Box>
    </Paper>
  );
};

export default PostForm;