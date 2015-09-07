'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('./../../config/config');

exports.createToken = function (user){
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}


exports.ensureAuthenticated = function(req, res, next){
  console.log("know headers",req.headers.authorization);

  if(!req.headers.authorization){
    return res
      .status(403)
      .jsonp({message: "Tu petición no tiene cabecera de autorización"});
  }

  var token = req.headers.authorization.split(" ")[1];
  var payload = jwt.decode(token, config.TOKEN_SECRET);

  if(payload.exp <= moment().unix()){
    return res
      .status(401)
      .jsonp({message: "El token ha expirado"})

  }

  req.user = payload.sub;
  next();
}


