const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(bodyParser.json());

app.use('/build', express.static(path.join(__dirname, '../build')));

// route to home page
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// global route handler
app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
