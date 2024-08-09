const mongoose = require('mongoose');
const config = require('../config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.db.uri, {
            userNewUrlParser: true,
            userUnifiedTopology: true,
        });
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Database connection error:', error);
        process.exit(1);
    }
};

module.exports = { connectDB };