const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Create a post
router.post('/', auth, async (req, res) => {
  try {
    const { content, image } = req.body;
    
    const newPost = new Post({
      user: req.user.id,
      content,
      image
    });
    
    const post = await newPost.save();
    
    // Populate user info
    const populatedPost = await Post.findById(post._id).populate('user', 'username profileImage');
    
    res.json(populatedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all posts
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('user', 'username profileImage')
      .populate('comments.user', 'username profileImage');
      
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get posts from followed users
router.get('/feed', auth, async (req, res) => {
  try {
    // Get current user
    const user = await User.findById(req.user.id);
    
    // Get posts from user and followed users
    const posts = await Post.find({
      $or: [
        { user: req.user.id },
        { user: { $in: user.following } }
      ]
    })
      .sort({ createdAt: -1 })
      .populate('user', 'username profileImage')
      .populate('comments.user', 'username profileImage');
      
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Like a post
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    
    // Check if already liked
    if (post.likes.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Post already liked' });
    }
    
    post.likes.push(req.user.id);
    await post.save();
    
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Unlike a post
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    
    // Check if not liked
    if (!post.likes.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Post not yet liked' });
    }
    
    // Remove like
    post.likes = post.likes.filter(like => like.toString() !== req.user.id);
    await post.save();
    
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add comment to post
router.post('/comment/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    
    const newComment = {
      user: req.user.id,
      text: req.body.text
    };
    
    post.comments.unshift(newComment);
    await post.save();
    
    const updatedPost = await Post.findById(req.params.id)
      .populate('comments.user', 'username profileImage');
    
    res.json(updatedPost.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
