var config = require('./../config/config');
var  express = require('express');
var router = express.Router();

var personaController = require('../app/controllers/Persona');

/**
 * Method that contains the HTTP method GET for the root of the app
 */
router.get('/', function(req, res){
  res.sendStatus(403);
});

router.post('/register', personaController.post);



module.exports = router;
