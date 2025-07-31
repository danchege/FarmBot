const OpenAI = require('openai');

let openai = null;

const getOpenAI = () => {
  if (!openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable is not set');
    }
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
};

const getFallbackResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  
  // Simple keyword-based responses for common farming questions
  if (message.includes('hello') || message.includes('hi')) {
    return "Hello! I'm FarmBot, your AI farming assistant. I'm currently in demo mode due to API limits, but I can still help with basic farming advice. What would you like to know about farming?";
  }
  
  if (message.includes('crop') || message.includes('plant')) {
    return "For crop selection, consider your local climate, soil type, and season. Popular crops include tomatoes, peppers, lettuce, and herbs for beginners. Make sure to check your USDA hardiness zone for best results.";
  }
  
  if (message.includes('pest') || message.includes('disease')) {
    return "For pest and disease management, practice crop rotation, use companion planting, and maintain good soil health. Natural remedies like neem oil and diatomaceous earth can help control common pests.";
  }
  
  if (message.includes('soil') || message.includes('fertilizer')) {
    return "Healthy soil is key to successful farming. Test your soil pH, add organic matter like compost, and consider natural fertilizers. Regular soil testing helps maintain optimal conditions for your plants.";
  }
  
  if (message.includes('water') || message.includes('irrigation')) {
    return "Proper watering is crucial. Most plants need 1-2 inches of water per week. Water deeply but less frequently to encourage strong root growth. Consider drip irrigation for water efficiency.";
  }
  
  if (message.includes('season') || message.includes('timing')) {
    return "Planting timing depends on your location and crop. Spring is ideal for most vegetables, while fall is great for cool-weather crops. Check your local frost dates for optimal planting times.";
  }
  
  // Default response
  return "I'm here to help with your farming questions! I can provide advice on crop selection, pest management, soil health, watering, and seasonal planting. What specific farming topic would you like to discuss? (Note: I'm currently in demo mode due to API limits)";
};

const generateFarmAdvice = async (userMessage) => {
  try {
    const systemPrompt = `You are FarmBot, an AI assistant specialized in helping farmers with agricultural advice. 
    You provide practical, science-based recommendations for:
    - Crop selection based on climate, soil, and season
    - Planting schedules and timing
    - Pest and disease management
    - Soil health and fertilization
    - Weather considerations
    - Sustainable farming practices
    
    Always be helpful, informative, and consider local conditions when possible. 
    Keep responses clear and actionable for farmers of all experience levels.`;

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Check if it's a quota/rate limit error
    if (error.code === 'insufficient_quota' || error.status === 429) {
      return getFallbackResponse(userMessage);
    }
    
    throw new Error('Failed to generate AI response');
  }
};

module.exports = {
  generateFarmAdvice
}; 