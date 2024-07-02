const express = require('express'); 
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded payloads
app.use(express.static('public')); // Middleware to serve static files from the 'public' directory

app.use('/api', apiRoutes); // Middleware to use API routes, prefixed with '/api'
app.use('/', htmlRoutes); // Middleware to use HTML routes, prefixed with '/'

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});