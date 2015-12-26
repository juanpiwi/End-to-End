'use strict';

/**
 * Initiation of the server, listening port set in config
 * @requires config:config
 * @requires app:express
 */
const config = require('./config/config');
const server = require('./app/express');


server.listen(config.port, () => {console.log('listen port ' + config.port);})
