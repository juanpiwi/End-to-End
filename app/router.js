var config = require('./../config/config');
var  express = require('express');
var router = express.Router();

/**
 * Method that contains the HTTP method GET for the root of the app
 */
router.get('/', function(req, res){
  res.sendStatus(403);
});



module.exports = router;
