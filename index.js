'use strict';

var config = require('./config/config');
//var server = require('./app/server');
var httpServer = require('http');

httpServer.listen(3000, function(){
  console.log('Listen Port'+ 3000);
});
