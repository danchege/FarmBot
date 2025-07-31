# FarmBot Deployment Guide

This guide covers deploying both the backend and frontend components of FarmBot.

## 🚀 Backend Deployment (Render)

### Prerequisites
- GitHub repository with your FarmBot code
- Render account (free tier available)
- MongoDB database (MongoDB Atlas recommended)

### Step 1: Prepare MongoDB
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Create a database user with read/write permissions

### Step 2: Deploy to Render
1. **Sign up/Login to Render**
   - Go to [render.com](https://render.com)
   - Sign up with your GitHub account

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `farmbot-backend` directory

3. **Configure Service**
   - **Name**: `farmbot-backend`
   - **Environment**: `Node`
   - **Build Command**: `pnpm install`
   - **Start Command**: `pnpm start`
   - **Plan**: Free (or paid for better performance)

4. **Set Environment Variables**
   ```
   PORT=10000
   MONGODB_URI=your_mongodb_atlas_connection_string
   OPENAI_API_KEY=your_openai_api_key
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your service URL (e.g., `https://farmbot-backend.onrender.com`)

## 🌐 Frontend Deployment (Vercel)

### Prerequisites
- GitHub repository with your FarmBot code
- Vercel account (free tier available)
- Backend API URL from Render deployment

### Step 1: Deploy to Vercel
1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the `farmbot-frontend` directory

3. **Configure Project**
   - **Framework Preset**: Create React App
   - **Root Directory**: `farmbot-frontend`
   - **Build Command**: `pnpm build`
   - **Output Directory**: `build`

4. **Set Environment Variables**
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be available at `https://your-project.vercel.app`

## 🔧 Environment Variables

### Backend (.env)
```bash
PORT=10000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/farmbot
OPENAI_API_KEY=sk-your-openai-api-key
NODE_ENV=production
```

### Frontend (.env)
```bash
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

## 📊 Monitoring & Maintenance

### Backend Monitoring
- **Render Dashboard**: Monitor logs and performance
- **Health Check**: `https://your-backend-url.onrender.com/health`
- **Logs**: Available in Render dashboard

### Frontend Monitoring
- **Vercel Analytics**: Built-in analytics
- **Performance**: Automatic performance monitoring
- **Deployments**: Automatic deployments on git push

## 🔒 Security Considerations

### Backend Security
- ✅ Rate limiting enabled
- ✅ CORS configured for frontend domain
- ✅ Helmet security headers
- ✅ Environment variables for sensitive data
- ✅ Input validation

### Frontend Security
- ✅ HTTPS enforced
- ✅ Environment variables for API URLs
- ✅ No sensitive data in client code

## 🚨 Troubleshooting

### Common Issues

1. **Backend won't start**
   - Check environment variables
   - Verify MongoDB connection
   - Check logs in Render dashboard

2. **Frontend can't connect to backend**
   - Verify `REACT_APP_API_URL` is correct
   - Check CORS settings in backend
   - Ensure backend is running

3. **OpenAI API errors**
   - Verify API key is correct
   - Check API usage limits
   - Ensure proper error handling

### Debug Commands

```bash
# Check backend health
curl https://your-backend-url.onrender.com/health

# Test API endpoint
curl -X POST https://your-backend-url.onrender.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"test","sessionId":"test"}'
```

## 📈 Scaling Considerations

### Backend Scaling
- **Render**: Upgrade to paid plan for better performance
- **Database**: Consider MongoDB Atlas M10+ for production
- **Caching**: Add Redis for session management
- **CDN**: Consider Cloudflare for global distribution

### Frontend Scaling
- **Vercel**: Automatic scaling with Pro plan
- **CDN**: Global edge network included
- **Analytics**: Upgrade to Vercel Analytics Pro

## 🔄 Continuous Deployment

### Automatic Deployments
- **Backend**: Deploys on push to main branch
- **Frontend**: Deploys on push to main branch
- **Environment**: Separate staging/production environments

### Manual Deployments
```bash
# Backend (Render)
git push origin main

# Frontend (Vercel)
git push origin main
```

## 📞 Support

- **Render Support**: [render.com/docs](https://render.com/docs)
- **Vercel Support**: [vercel.com/docs](https://vercel.com/docs)
- **MongoDB Atlas**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)

---

**Happy Deploying! 🚀** 