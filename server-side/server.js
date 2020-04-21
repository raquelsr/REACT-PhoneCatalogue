var express = require('express');
var app = express();
var cors = require('cors');

const data = require('./data/phones.json');

app.use(cors());

app.listen(3001, () => {
 console.log('Server running on port 3001');
});

app.get('/phones', (req, res) => {
  res.status(200).json(data);
});

app.get('/phones/:id', (req,res) => {
  const phone = data.find(phone => phone.id == req.params.id);
  phone ? res.status(200).json(phone) : res.status(404).end();
});
