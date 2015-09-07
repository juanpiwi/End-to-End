'use strict';

var mongoose = require('../dbConnection.js');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  user: {type: String, required: true},
  password: {type: String, required:true},
  email: {type: String, required: true},
  token: String
});

var User = mongoose.model('User',UserSchema);
module.exports = User;
