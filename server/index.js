import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('mongodb connected');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected');
});
mongoose.connection.on('connected', () => {
  console.log('mongoDB connected');
});

app.get('/', (req, res) => {
  res.send('request send');
});

app.listen(8800, () => {
  connect();
  console.log('connected to backend');
});
