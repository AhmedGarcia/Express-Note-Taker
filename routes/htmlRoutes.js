const express = require('express');
const path = require('path');
const router = express.Router();

// GET /notes - Return the notes.html file
router.get('/notes', (req, res) => {
  console.log('GET /notes');
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET * - Return the index.html file for all other routes
router.get('*', (req, res) => {
  console.log('GET *');
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;