const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mailchef:Rz67sm1gIuofn5dx@cluster0.mongodb.net/mailchef?retryWrites=true&w=majority', {
            useNewUrlParser: true,  
            useUnifiedTopology: true, 
            serverSelectionTimeoutMS: 30000, 
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
