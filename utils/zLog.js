var config = require('./config.js');

function log(msg, params) {
  if (config.CURRENT_ENV == ENV.DEV) {
    console.log(msg, params);
  }
}