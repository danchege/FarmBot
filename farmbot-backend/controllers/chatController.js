const { generateFarmAdvice } = require('../services/openaiService');
const Message = require('../models/Message');

const chatController = {
  // Handle incoming chat messages
  async handleChat(req, res) {
    try {
      const { message, sessionId } = req.body;

      if (!message || message.trim() === '') {
        return res.status(400).json({
          success: false,
          message: 'Message is required'
        });
      }

      // Generate AI response
      const aiReply = await generateFarmAdvice(message);

      // Save conversation to database
      const conversation = new Message({
        userMessage: message,
        aiReply: aiReply,
        sessionId: sessionId || 'default-session'
      });

      await conversation.save();

      res.json({
        success: true,
        data: {
          userMessage: message,
          aiReply: aiReply,
          timestamp: conversation.timestamp
        }
      });

    } catch (error) {
      console.error('Chat Controller Error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  },

  // Get chat history for a session
  async getChatHistory(req, res) {
    try {
      const { sessionId } = req.params;
      
      const messages = await Message.find({ sessionId })
        .sort({ timestamp: 1 })
        .limit(50);

      res.json({
        success: true,
        data: messages
      });

    } catch (error) {
      console.error('Get Chat History Error:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }
};

module.exports = chatController; 