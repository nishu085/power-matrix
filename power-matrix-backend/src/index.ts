import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test GET request
app.get('/api/test', (req, res) => {
  res.json({ message: 'GET request working!' });
});

// Test POST request
app.post('/api/test', (req, res) => {
  const data = req.body;
  res.json({ 
    message: 'POST request working!',
    receivedData: data 
  });
});

// Simple user registration without validation
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  res.json({
    message: 'Signup request received',
    user: { name, email }  // Don't send back password!
  });
});


// Simple login without validation
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: 'Login request received',
    email: email
  });
});

// // Database connection
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/power-matrix')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/auth', authRoutes);

// // Basic route
// app.get('/', (req, res) => {
//   res.send('Power Matrix API is running');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });