import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { addUser, removeUser, updateUser, getUserById, getUserByEmail } from './DB/DButils/userUtils.js'; 

const app = express();
const PORT = 3000;

dotenv.config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const database = process.env.MONGO_DATABASE;

const MONGO_URI = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`;


app.use(cors());
app.use(bodyParser.json());


mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));



app.post('/users', async (req, res) => {
  try {
    const newUser = await addUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const deletedUser = await removeUser(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


app.put('/users/:id', async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.get('/users/email/:email', async (req, res) => {
  try {
    const user = await getUserByEmail(req.params.email);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
