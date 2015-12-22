const config = require('./../config/config');
const express = require('express');
const router = express.Router();

const personaController = require('../app/controllers/Persona');
const userController = require('../app/controllers/User');
const token = require('../app/lib/tokenJWT.js');

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
router.get('/private', token.ensureAuthenticated, (req, res) => {
  console.log('Hola soy privado');
});



module.exports = router;
