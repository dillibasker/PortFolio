import express from 'express';
import { Achievement } from '../models/index.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try { res.json(await Achievement.find().sort({ createdAt: -1 })); }
  catch (err) { res.status(500).json({ error: err.message }); }
});
router.post('/', async (req, res) => {
  try { const a = new Achievement(req.body); await a.save(); res.status(201).json(a); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
router.put('/:id', async (req, res) => {
  try { res.json(await Achievement.findByIdAndUpdate(req.params.id, req.body, { new: true })); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
router.delete('/:id', async (req, res) => {
  try { await Achievement.findByIdAndDelete(req.params.id); res.json({ message: 'Deleted' }); }
  catch (err) { res.status(400).json({ error: err.message }); }
});
export default router;
