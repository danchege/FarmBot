const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config({ path: '../.env' });
// Fallback to local .env if root .env doesn't exist
if (!process.env.OPENAI_API_KEY) {
  require('dotenv').config();
}

const connectDB = require('./config/db');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// CORS configuration - Updated for farm-bot.vercel.app
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://farm-bot.vercel.app', 'https://farmbot-frontend.vercel.app', 'https://farmbot-ai.vercel.app'] 
    : ['http://localhost:3000'],
  credentials: true
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', chatRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'FarmBot API is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'FarmBot API is running',
    endpoints: {
      health: '/health',
      chat: '/api/chat'
    },
    timestamp: new Date().toISOString()
  });
});

// Favicon endpoint
app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); // No content
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 FarmBot API server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
}); 