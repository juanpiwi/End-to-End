var config = require('./../config/config');
var  express = require('express');
var router = express.Router();

var personaController = require('../app/controllers/Persona');
var userController = require('../app/controllers/User');
var token = require('../app/lib/tokenJWT.js');

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

//Ruta de autenticación y login
router.route('/auth/signup', userController.emailSignup);
router.route('/auth/login', userController.emailLogin);

//Ruta solo accesible si se esta logueado
router.get('/private', token.ensureAuthenticated,function(req, res){
  console.log('Hola soy privado');
});



module.exports = router;
