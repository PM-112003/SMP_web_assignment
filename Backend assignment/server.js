const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const Post = require('./models/Post');
const expressLayouts = require('express-ejs-layouts');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('DB error:', err));

const app = express();

app.use(express.json());
app.use(cookieParser());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Serve static files if needed
app.use(express.static(path.join(__dirname, 'public')));

// After setting app.set('view engine', 'ejs')
app.use(expressLayouts);
app.set('layout', 'layout'); 

// Middleware to set user info for all EJS templates
app.use((req, res, next) => {
  res.locals.user = req.user || null; // If using JWT, you might set req.user in auth middleware
  next();
});

// Routes for API
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Routes for frontend pages
app.get('/signin', (req, res) => res.render('signin'));
app.get('/signup', (req, res) => res.render('signup'));

// Protect homepage route (only accessible if logged in)
const { protect } = require('./middleware/authMiddleware');

// Home route with posts
app.get('/', protect, async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  const postsWithAuthor = posts.map(post => ({
    ...post._doc,
    authorName: req.user.name  // Simplified: assuming all posts belong to logged-in user for now
  }));

  res.render('home', { user: req.user, posts: postsWithAuthor });
});

app.get('/post/:id', protect, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).send('Post not found');
  res.render('post', {
    user: req.user,
    post: {
      ...post._doc,
      authorName: req.user.name // Simplified again
    }
  });
});


// Logout route
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/signin');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
