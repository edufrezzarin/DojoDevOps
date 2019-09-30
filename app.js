
const express = require('express');

const app = express();

// Server connection
const PORT = 9000;
const HOST = '0.0.0.0';

// Application content
const os = ['Windows', 'macOS', 'Linux'];

// Web Server
app.get('/', (req, res) => {
  res.json(os);
});

// Console output
app.listen(PORT, HOST);

module.exports = app;