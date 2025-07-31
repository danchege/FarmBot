# FarmBot Frontend

Modern React frontend for FarmBot - AI-powered farming assistant.

## Features

- 🌱 **Modern UI/UX** - Clean, responsive design with glowing blue theme
- 💬 **Real-time Chat** - Interactive chat interface with AI responses
- 📱 **Mobile Responsive** - Optimized for all device sizes
- 🎨 **Tailwind CSS** - Beautiful styling with custom animations
- 🚀 **Fast Performance** - Optimized React components
- ♿ **Accessible** - WCAG compliant design

## Pages

- **Home** - Landing page with features and call-to-action
- **Chat** - Main chat interface with FarmBot AI
- **About** - Detailed information about FarmBot capabilities

## Components

- `Navbar` - Responsive navigation with mobile menu
- `ChatBox` - Main chat interface with message history
- `MessageCard` - Individual message display component
- `Footer` - Site footer with links and information

## Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm start
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

## Environment Variables

Create a `.env` file in the frontend root:

```
REACT_APP_API_URL=http://localhost:5000
```

## API Integration

The frontend connects to the FarmBot backend API:

- **POST** `/api/chat` - Send messages and receive AI responses
- **GET** `/api/chat/history/:sessionId` - Get chat history

## Technologies Used

- React 18
- React Router DOM
- Tailwind CSS
- Heroicons
- Axios (for API calls)

## Deployment

Deploy to Vercel:

1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy with automatic builds

## Development

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── assets/        # Static assets
├── App.jsx        # Main app component
└── index.js       # Entry point
```

### Styling
- Tailwind CSS for utility-first styling
- Custom CSS classes in `index.css`
- Responsive design with mobile-first approach
- Custom animations and transitions

### State Management
- React hooks for local state
- No external state management required
- Chat messages stored in component state

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details 