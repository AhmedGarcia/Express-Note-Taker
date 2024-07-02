const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4} = require('uuid'); //Use this package to generate unic ids
const router = express.Router();

const dbPath = path.join(__dirname, '../db/db.json');

// Helper function for reading the db.jason file
const readDbFile = () => {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
};




