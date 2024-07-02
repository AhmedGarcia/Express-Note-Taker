const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4} = require('uuid'); //Use this package to generate unique ids
const router = express.Router();

const dbPath = path.join(__dirname, '../db/db.json');

// Helper function for reading the db.jason file
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





