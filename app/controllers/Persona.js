'use strict';

const Persona = require('../models/Persona');

let persona = {};

(function() {
  //Create public method POST,
  //---create a person---.
  this.post = (req, res) => {
    Persona.create({
      'nombre': req.body.nombre,
      'apellido': req.body.apellido
    }, (err) => {
      if (err)
        res.send(err);
      res.json({
        message: 'Persona registrada'
      });
    });
  };

}).apply(persona);

module.exports = persona;
