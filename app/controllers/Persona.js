'use strict';

const Persona = require('../models/Persona');

let persona = {};

(function() {
  //Create public method POST,
  //---create a person---.
  this.post = function(req, res) {
    Persona.create({
      'nombre': req.body.nombre,
      'apellido': req.body.apellido
    }, function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Persona registrada'
      });
    });
  };

}).apply(persona);

module.exports = persona;

// module.exports = crud;
// exports.list = function (req, res){
//   Persona.find({},function(err,people){
//     console.log('person',people);
//     res.send(people);
//   });
// }
