'use strict';

var mongoose = require('../dbConnection.js');
var Schema = mongoose.Schema;


var PersonaSchema = new Schema({
  nombre: String,
  apellido: String
});

var Persona = mongoose.model('Persona', PersonaSchema);
module.exports = Persona;
