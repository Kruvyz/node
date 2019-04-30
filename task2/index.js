const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let users = [
  { name: "user1", age: 18 },
  { name: "serh", age: 20 },
  { name: "andr", age: 26 }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const id = +req.params.id;
  res.send(users[id]);
});

app.post('/users', (req, res) => {
  const user = req.body;
  console.log(1);
  console.log(req.body);

  users.push(user);
  console.log(users);
  res.end();
})

app.put('/users/:id', (req, res) => {
  const id = +id.params.id;
  
  users[id] = req.body;
});

app.listen(3001);