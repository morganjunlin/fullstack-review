const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `http://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    } else {
      let repoInfo = JSON.parse(body).map(repo => (
        {
          username: username,
          html_url: repo['html_url'],
          watchers: repo['watchers']
        }
      ));
      
      callback(null, JSON.stringify(repoInfo));
    }
  })
}

module.exports = getReposByUsername;