import express from 'express';
import { Project, Hackathon, Event, Achievement, Contact } from '../models/index.js';
const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    const [projects, hackathons, events, achievements, messages] = await Promise.all([
      Project.countDocuments(),
      Hackathon.countDocuments(),
      Event.countDocuments(),
      Achievement.countDocuments(),
      Contact.countDocuments()
    ]);
    res.json({ projects, hackathons, events, achievements, messages });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

router.get('/messages', async (req, res) => {
  try { res.json(await Contact.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});

export default router;
