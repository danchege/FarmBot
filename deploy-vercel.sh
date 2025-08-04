#!/bin/bash

# Deploy to Vercel script
echo "🚀 Starting Vercel deployment..."

# Navigate to frontend directory
cd farmbot-frontend

# Deploy to Vercel
npx vercel --prod --token $VERCEL_TOKEN --yes --confirm

echo "✅ Deployment completed!" 