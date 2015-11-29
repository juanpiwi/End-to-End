'use strict';

const mongoose = require('../dbConnection.js');
const Schema = mongoose.Schema;


let PersonaSchema = new Schema({
  nombre: String,
  apellido: String
});

let Persona = mongoose.model('Persona', PersonaSchema);
module.exports = Persona;
