const express = require('express');
const Post = require('../models/Post');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Create post
router.post('/', protect, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const post = new Post({
      title,
      content,
      user: req.user._id
    });

    await post.save();
    res.status(201).json({ message: 'Post created' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
