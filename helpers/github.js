const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `http://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    if (err) {
      callback(err, null)
      return;
    } else {
      console.log('===== HELLO I AM BODY =====', body)
      callback(null, body)
    }
  })
}

module.exports = getReposByUsername;