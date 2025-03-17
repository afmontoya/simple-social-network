import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  CardActions, 
  Typography, 
  Avatar, 
  Box, 
  IconButton, 
  Divider 
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AuthContext from '../../context/AuthContext';
import PostContext from '../../context/PostContext';

const PostItem = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { likePost, unlikePost } = useContext(PostContext);
  
  const { _id, content, user: postUser, likes, createdAt } = post;
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const isLiked = user && likes.includes(user._id);
  
  const handleLikeClick = () => {
    if (isLiked) {
      unlikePost(_id);
    } else {
      likePost(_id);
    }
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar 
            src={postUser?.profileImage} 
            alt={postUser?.username}
            sx={{ mr: 2 }}
          />
          <Box>
            <Typography 
              variant="subtitle1" 
              component={Link} 
              to={`/profile/${postUser?._id}`}
              sx={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
            >
              {postUser?.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formatDate(createdAt)}
            </Typography>
          </Box>
        </Box>
        
        <Typography variant="body1">
          {content}
        </Typography>
      </CardContent>
      
      <Divider />
      
      <CardActions>
        <IconButton onClick={handleLikeClick} color={isLiked ? 'primary' : 'default'}>
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likes.length} {likes.length === 1 ? 'like' : 'likes'}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default PostItem;