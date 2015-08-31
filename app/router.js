var config = require('./../config/config');
var  express = require('express');
var router = express.Router();

var personaController = require('../app/controllers/Persona');
var userController = require('../app/controllers/User');

/**
 * Method that contains the HTTP method GET for the root of the app
 */
/*
router.get('/', function(req, res){
  res.sendStatus(403);
});
*/
/*
router.post('/register', personaController.post);

router.post('/users', userController.create);
router.get('/users/list', userController.read);
*/

router.route('/users')
  .get(userController.findAll)
  .post(userController.add);

router.route('/users/:id')
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.delete);



module.exports = router;
