const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/studentDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected locally');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit on failure
  }
};

module.exports = connectDB;
