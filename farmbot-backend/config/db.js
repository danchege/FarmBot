const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use a default MongoDB URI if not provided
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/farmbot';
    
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.log('Continuing without database connection...');
    // Don't exit the process, just log the error
  }
};

module.exports = connectDB; 