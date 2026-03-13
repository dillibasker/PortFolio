import express from 'express';
import { Event } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try { res.json(await Event.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
router.post('/', async (req, res) => {
  try { const e = new Event(req.body); await e.save(); res.status(201).json(e); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
router.put('/:id', async (req, res) => {
  try { res.json(await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
router.delete('/:id', async (req, res) => {
  try { await Event.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
export default router;
