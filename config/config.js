var env = process.env.NODE_ENV || 'production';

if (env != 'local' && env != 'development' && env != 'stage' && env != 'production') {
  env = 'production';
}

var config = require('./'+env+'/config.js');

module.exports = config;
