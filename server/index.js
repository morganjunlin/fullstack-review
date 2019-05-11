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
  
  getReposByUsername(req.body.username, (err, userData) => {
    if (err) {
      res.status(404).send('\n===== ERROR GETTING FROM GETHUB =====\n', err)
    } else {
      db.save(req.body.username, userData, (err, data) => {
        if (err) {
          res.status(404).send('\n===== ERROR SAVING TO MONGODB =====\n', err)
        } else {
          console.log('\n===== WRITE GOOD =====\n', data)
          res.status(201).send('SUCCESS');
        }
      })
    }
  })
});

app.get('/repos/:username', (req, res) => {
  // This route should send back the top 25 repos
  // TODO: modify so that i'm grabbing the document of user and then outputting user.repos
  db.Repo.find({ _id : { $lte: 25 } })
    .then(data => res.status(200).send('IN GET----', data))
    .catch(err => res.status(404).send('Get', err))
});

let port = 1128;

app.listen(port,() => {
  console.log(`listening on port ${port}`);
});

