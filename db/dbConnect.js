const mongoose = require('mongoose');
require('dotenv').config(); 
const MONGO_URI=process.env.MONGO_URI || 'mongodb://localhost:27017/health';

const connectToDb = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectToDb;
