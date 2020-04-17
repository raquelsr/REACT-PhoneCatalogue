var express = require('express');
var app = express();
const data = require('./data/phones.json');

app.listen(3001, () => {
 console.log('Server running on port 3001');
});

app.get('/phones', (req, res, next) => {
  res.json(data);
});