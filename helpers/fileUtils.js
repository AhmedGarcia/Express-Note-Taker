const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db/db.json');

//Read data from the database file
function readDbFile() {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
}


//Write data to the data base file
function writeDbFile(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

module.exports = {
    readDbFile,
    writeDbFile
};