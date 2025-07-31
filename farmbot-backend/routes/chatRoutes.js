const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// POST /api/chat - Send a message and get AI response
router.post('/chat', chatController.handleChat);

// GET /api/chat/history/:sessionId - Get chat history for a session
router.get('/chat/history/:sessionId', chatController.getChatHistory);

module.exports = router; 