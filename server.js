// Import necessary modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

// Create an instance of the Express app
const app = express();

// Use the cors middleware to allow cross-origin requests
app.use(cors());

// Serve static files from the "public" folder
app.use(express.static('public'));

// Route to serve the city.json file
app.get('/city', (req, res) => {
  const cityJsonPath = path.join(__dirname, 'public', 'city.json');
  fs.readFile(cityJsonPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading city.json');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

// Set the port number for the server to listen on
const port = process.env.PORT || 8080;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
