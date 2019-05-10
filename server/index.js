const express = require('express');
const db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', (req, res) => {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  
  // get func, (req, res)
  // then run db.save func to save
  app.get('link', (req, res) => {
    db.save(req.query)
      .then(() => res.status(200).send())
      .catch(err => res.status(404).send('Get in Post', err))
  })
    .then(() => res.status(201).send('IN POST----'))
    .catch(err => res.status(404).send('Post', err))
});

app.get('/repos', (req, res) => {
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

