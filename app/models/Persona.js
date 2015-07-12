'use strict';

var mongoose = require('../dbConnection.js');

var PersonaSchema = mongoose.model('Persona',{
  nombre: String,
  apellido: String
});

module.exports = mongoose.model('Persona', PersonaSchema);
