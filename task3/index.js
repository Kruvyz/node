const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const bodyParser = require("body-parser");
   
const app = express();
const jsonParser = express.json();
 
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
 
let dbClient;
 
mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("usersdb").collection("users");
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const id = +req.params.id;
  res.send(users[id]);
});

app.post('/users', (req, res) => {s
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

//app.listen(3001);