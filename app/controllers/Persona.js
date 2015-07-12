'use strict';

var Persona = require('../models/Persona');

exports.list = function (req, res){
  Persona.find({},function(err,people){
    console.log('person',people);
    res.send(people);
  });
}
