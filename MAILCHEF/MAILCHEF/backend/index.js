const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./connection');
const userRoutes = require('./routes/userRoutes');


const app = express();

connectDB();

app.use(express.json());

app.use('/api', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
