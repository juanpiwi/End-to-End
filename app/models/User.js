'use strict';

const mongoose = require('../dbConnection.js');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  token: String
});

let User = mongoose.model('User', UserSchema);
module.exports = User;
