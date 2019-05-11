const express = require('express');
const db = require('../database/index.js')
const getReposByUsername = require('../helpers/github.js')
const bodyParser = require('body-parser')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/repos', (req, res) => {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  getReposByUsername(req.body.username, (err, repoData) => {
    console.log(`\n===== USER DATA IS HERE =====\n ${repoData}`)
    if (err) {
      res.status(404).send(`\n===== ERROR GETTING FROM GETHUB =====\n ${err}`)
    } else {
      db.save(repoData, (err, data) => {
        if (err) {
          res.status(404).send(`\n===== ERROR SAVING TO MONGODB =====\n ${err}`)
        } else {
          res.status(201).send();
        }
      })
    }
  })
});

app.get('/repos', (req, res) => {
  console.log(`\n===== HELLOOOOO =====\n`)
  db.find((err, docs) => {
    console.log(`\n===== GET DATA IS HERE =====\n ${req}`)
    if (err) {
      res.status(404).send(`\n===== ERROR GETTING FROM MONGODB =====\n ${err}`)
    } else {
      res.status(200).send(docs)
    }
  })
    // .limit(10)
    // .then(data => res.status(200).send('IN GET----', data))
    // .catch(err => res.status(404).send('Get', err))
});

let port = 1128;

app.listen(port,() => {
  console.log(`listening on port ${port}`);
});

