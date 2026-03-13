import express from 'express';
import { Hackathon } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try { res.json(await Hackathon.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
router.post('/', async (req, res) => {
  try { const h = new Hackathon(req.body); await h.save(); res.status(201).json(h); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
router.put('/:id', async (req, res) => {
  try { res.json(await Hackathon.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
router.delete('/:id', async (req, res) => {
  try { await Hackathon.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
export default router;
