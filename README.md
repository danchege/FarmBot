# FarmBot 🌱

AI-powered farming assistant that helps farmers decide what and when to plant using artificial intelligence.

## 🚀 Features

- **AI-Powered Advice** - Get intelligent recommendations for crop selection and farming practices
- **Real-time Chat** - Interactive chat interface with instant AI responses
- **Modern UI** - Beautiful, responsive design with glowing blue theme
- **Mobile Friendly** - Optimized for all device sizes
- **Conversation History** - All chats are logged and stored in MongoDB
- **Secure API** - Rate limiting and security middleware

## 🏗️ Architecture

### Backend (Node.js + Express + MongoDB)
- **API Routes** - RESTful endpoints for chat functionality
- **OpenAI Integration** - GPT-3.5-turbo for farming advice
- **MongoDB** - Store conversation history
- **Security** - Rate limiting, CORS, and Helmet middleware

### Frontend (React + Tailwind CSS)
- **Modern UI** - Clean, responsive design
- **Real-time Chat** - Interactive chat interface
- **Routing** - React Router for navigation
- **Styling** - Tailwind CSS with custom animations

## 📁 Project Structure

```
FarmBot/
├── farmbot-backend/          # Backend API
│   ├── controllers/          # Chat logic
│   ├── services/            # OpenAI handler
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API routes
│   ├── config/              # Database connection
│   └── server.js            # Express server
├── farmbot-frontend/        # React frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/          # Page components
│   │   └── App.jsx         # Main app
│   └── public/             # Static assets
└── README.md               # This file
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- OpenAI API key

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd farmbot-backend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Create environment file:**
   Create a `.env` file in `farmbot-backend/`:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/farmbot
   OPENAI_API_KEY=your_openai_api_key_here
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   pnpm dev
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd farmbot-frontend
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm start
   ```

## 🌐 API Endpoints

### POST /api/chat
Send a message and receive AI farming advice.

**Request:**
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

## 🚀 Deployment

### Backend (Render)
1. Connect your GitHub repository
2. Set environment variables in Render dashboard
3. Deploy with Node.js buildpack

### Frontend (Vercel)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds

## 🎨 Features

### Chat Interface
- Real-time messaging with AI
- Message history with user/AI avatars
- Loading indicators
- Responsive design

### Pages
- **Home** - Landing page with features
- **Chat** - Main chat interface
- **About** - Detailed information

### Styling
- Glowing blue and white theme
- Custom animations
- Mobile-responsive design
- Modern UI components

## 🔧 Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- OpenAI API
- Helmet (Security)
- Express Rate Limit
- CORS

### Frontend
- React 18
- React Router DOM
- Tailwind CSS
- Heroicons
- Axios

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/farmbot
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For support, please open an issue on GitHub or contact the development team.

---

**FarmBot** - Making farming smarter with AI 🌱 .