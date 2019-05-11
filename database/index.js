const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  username: String,
  name: String,
  html_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoData, callback) => {

  JSON.parse(repoData).forEach(repo => {
    // console.log(repo)
    Repo.findOneAndUpdate(repo, repo, { upsert: true }, (err, data) => {
      if (err) {
        callback(err)
      } else {
        callback(null, data)
      }
    })
  })
}

let find = (callback) => {

  Repo.find({}, (err, docs) => {
    console.log('\n====DOCS HERE====\n', docs)
    if (err) {
      callback(err)
    } else {
      callback(null, docs)
    }
  })
}

module.exports = { save, find }