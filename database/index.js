const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  username: String,
  html_url: String,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoData, callback) => {

  JSON.parse(repoData).forEach(repo => {
    Repo.findOneAndUpdate(repo, repo, { upsert: true })
      .then(data => callback(null, data))
      .catch(err => callback(err));
  })
}

let find = (callback) => {

  Repo.find({})
    .sort({ watchers: 'desc'})
    .limit(25)
    .then(docs => callback(null, docs))
    .catch(err => callback(err));
}

module.exports = { save, find }