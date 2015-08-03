'use strict';

var User = require('../models/User.js');

var userController = {};

(function(){

  this.create = function(req, res, next){
    if(req.body.user === undefined || req.body.password === undefined || req.body.user === '' || req.body.password === ''){
      return res.send('Hay campos vacios');
    }
    var user = new User(req.body);
    user.save(function(err){
      console.log('errrr', err)
      if(err){
        return next(err);
      }else{
        res.json(user);
      }
    });
  };

}).apply(userController)

module.exports = userController;
