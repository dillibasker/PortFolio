import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dns from "dns"
dns.setServers(["1.1.1.1","8.8.8.8"])
dotenv.config();
import mongoose from 'mongoose';
import projectRoutes from './routes/projects.js';
import hackathonRoutes from './routes/hackathons.js';
import eventRoutes from './routes/events.js';
import achievementRoutes from './routes/achievements.js';
import contactRoutes from './routes/contact.js';
import adminRoutes from './routes/admin.js';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log(' MongoDB connected'))
  .catch(err => console.log(' MongoDB error:', err));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/hackathons', hackathonRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio API running 🚀' });
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
