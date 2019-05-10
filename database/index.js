const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: String,
  name: String,
  full_name: String
});

let Repo = mongoose.model('Repo', repoSchema);

Repo.find({})
  .then(data => console.log(data))

let save = (data) => {
  // This function should save a repo or repos to
  // the MongoDB
  Repo.create(data, (err, res) => {
    if (err) {
      res.send(err => res.status(404).send('Fail Create:', err))
    }
  })
}

module.exports = { save, Repo }