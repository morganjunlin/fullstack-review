const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  username: String,
  repoInfo: String
});

let Repo = mongoose.model('Repo', repoSchema);

Repo.find({})
  .then(data => console.log(data))

let save = (data, callback) => {
  // This function should save a repo or repos to
  // the MongoDB
  Repo.create(data)
    .then(data => callback(null, data))
    .catch(err => callback(err, null))
}

let find = (data, callback) => {

}

module.exports = { save, find }