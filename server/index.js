const express = require('express');
const db = require('../database/index.js');
const getReposByUsername = require('../helpers/github.js');
const bodyParser = require('body-parser')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/repos', (req, res) => {
  getReposByUsername(req.body.username, (err, repoData) => {
    if (err) {
    } else {
      db.save(repoData, (err, data) => {
        if (err) {
          res.status(404).send(`\n===== ERROR SAVING TO MONGODB =====\n ${err}`);
        } else {
          res.status(201).send();
        }
      })
    }
  })
});

app.get('/repos', (req, res) => {
  db.find((err, docs) => {
    if (err) {
      res.status(404).send(`\n===== ERROR GETTING FROM MONGODB =====\n ${err}`);
    } else {
      res.status(200).send(docs);
    }
  })
});

let port = 1128;

app.listen(port,() => {
  console.log(`listening on port ${port}`);
});

