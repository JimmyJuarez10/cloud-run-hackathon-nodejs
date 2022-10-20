const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let index = 0;
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['F','T'];
  index++
  if(index >= moves.length){
    index = 0
  }
  // TODO add your implementation here to replace the random response
  res.send(moves[index]);
});

app.listen(process.env.PORT || 8080);