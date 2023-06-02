const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('path/to/db.json');
const middlewares = jsonServer.defaults();

// Serve JSON Server API under '/api' path
app.use('/api', router);

// Serve React static files
app.use(express.static(path.join(__dirname, 'build')));

// Serve React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});