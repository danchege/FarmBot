const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  userMessage: {
    type: String,
    required: true,
    trim: true
  },
  aiReply: {
    type: String,
    required: true,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  sessionId: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Message', messageSchema); 