const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  username: String,
  repoInfo: [String]
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (username, userData, callback) => {
  // This function should save a repo or repos to
  // the MongoDB
  let userDocument = { username , repoInfo: userData }

  // TODO: be able to do update if already exists
  Repo.create(userDocument, (err, data) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, data)
    }
  })
}

let find = (data, callback) => {

}

module.exports = { save, find }