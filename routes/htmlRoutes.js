const express = require('express');
const path = require('path');
const router = express.Router();


//GET /notes - Return the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'));
});

//GET * - Return the index.html for all other routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'));
});

module.exports = router;