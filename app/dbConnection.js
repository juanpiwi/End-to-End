'use strict';

var mongoose = require('mongoose');
var config = require('../config/config');
var mongoUrl = 'mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.dbName;

var conectWithRetry = function(){
  return mongoose.connect(mongoUrl, function(err){
    if(err){
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
      setTimeout(conectWithRetry,5000);
    }
  });
}

conectWithRetry();

module.exports = mongoose;
