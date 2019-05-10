const express = require('express');
const db = require('../database/index.js')
const getReposByUsername = require('../helpers/github.js')
const bodyParser = require('body-parser')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/repos', (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  // get func, (req, res)
  // then run db.save func to save
  let body;
  getReposByUsername(req.body.username, (err, userData) => {
    if (err) {
      res.status(404).send('\n===== ERROR GETTING FROM GETHUB =====\n', err)
    } else {
      res.status(201).send(userData)
    }
  })
    // .catch(err => res.status(404).send('Post', err))

  // res.status(201).send(req.body)// {user: whatever_i_typed_in}
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

