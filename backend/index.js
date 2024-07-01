import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import authenticateToken from './middleware/auth.js';
import prRoutes from './routes/prData.js'

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://mahaveer-pr-management-system.vercel.app/'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],

}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://mahaveer-pr-management-system.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(cookieParser())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Connected successfully')
})

app.use('/auth', authRoutes);
app.use('/user', authenticateToken, userRoutes);
app.use('/api', prRoutes);

app.get('/',(req,res)=>{
  res.send('connected successfully')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
