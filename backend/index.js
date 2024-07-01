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
  origin: 'http://mahaveer-pr-management-system',
  credentials:true
}));
app.use(cookieParser())
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', authenticateToken, userRoutes);
app.use('/api', prRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
