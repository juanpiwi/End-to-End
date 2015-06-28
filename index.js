var config = require('./config/config'),
  server = require('./app/express');

/**
 * Initiation of the server, listening port set in config
 * @requires config:config
 * @requires app:express
 */
server.listen(config.port, function() {
  console.log('listen port '+ config.port);
});
