# FarmBot Backend API

AI-powered farming assistant backend built with Node.js, Express, and MongoDB.

## Features

- 🤖 OpenAI-powered farming advice
- 💬 Real-time chat functionality
- 📊 Conversation logging in MongoDB
- 🔒 Secure API with rate limiting
- 🌐 CORS enabled for frontend integration

## Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Environment Variables:**
   Create a `.env` file in the root directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/farmbot
   OPENAI_API_KEY=your_openai_api_key_here
   NODE_ENV=development
   ```

3. **Start the server:**
   ```bash
   # Development
   pnpm dev
   
   # Production
   pnpm start
   ```

## API Endpoints

### POST /api/chat
Send a message and receive AI farming advice.

**Request Body:**
```json
{
  "message": "What should I plant in spring?",
  "sessionId": "user-session-123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "userMessage": "What should I plant in spring?",
    "aiReply": "For spring planting, consider...",
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

### GET /api/chat/history/:sessionId
Get chat history for a specific session.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "userMessage": "What should I plant in spring?",
      "aiReply": "For spring planting...",
      "timestamp": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### GET /health
Health check endpoint.

## Database Schema

### Message Model
```javascript
{
  userMessage: String (required),
  aiReply: String (required),
  timestamp: Date (default: now),
  sessionId: String (required)
}
```

## Deployment

Deploy to Render:
1. Connect your GitHub repository
2. Set environment variables in Render dashboard
3. Deploy with Node.js buildpack

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- OpenAI API
- Helmet (Security)
- Express Rate Limit
- CORS 