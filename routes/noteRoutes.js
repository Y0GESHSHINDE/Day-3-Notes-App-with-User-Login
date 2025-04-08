const express = require('express');
const Note = require('../models/Note');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

// Create Note
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = new Note({ title, content, userId: req.userId });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get All Notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id }); // userId must match JWT payload
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});


// Update Note
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { title, content },
      { new: true }
    );
    if (!note) return res.status(404).json({ msg: 'Note not found' });
    res.json(note);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete Note
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!note) return res.status(404).json({ msg: 'Note not found' });
    res.json({ msg: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
