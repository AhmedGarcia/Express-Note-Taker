const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const dbPath = path.join(__dirname, '../db/db.json');

// Helper function to read the db.json file
const readDbFile = () => {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

// Helper function to write to the db.json file
const writeDbFile = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// GET /api/notes - Retrieve all notes
router.get('/notes', (req, res) => {
  const notes = readDbFile();
  res.json(notes);
});

// POST /api/notes - Save a new note
router.post('/notes', (req, res) => {
  const { title, text } = req.body;
  const newNote = { id: uuidv4(), title, text };

  const notes = readDbFile();
  notes.push(newNote);
  writeDbFile(notes);

  res.json(newNote);
});

// DELETE /api/notes/:id - Delete a note
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;

  let notes = readDbFile();
  notes = notes.filter(note => note.id !== noteId);
  writeDbFile(notes);

  res.json({ message: 'Note deleted successfully!' });
});

module.exports = router;



