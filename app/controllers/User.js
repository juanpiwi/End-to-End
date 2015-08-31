'use strict';

var User = require('../models/User.js');

var userController = {};

(function(){

  //GET - Return all users in the DB
  this.findAll = function (req, res){
    User.find(function(err, users){
      if(err){
        res.send(500, err.message);
      }
      console.log('GET /users');
      res.status(200).jsonp(users);
    });
  };

  //GET - Return a User with specified ID
  this.findById = function (req, res){
    User.findById(req.params.id, function(err, users){
      if(err){
        res.send(500, err.message);
      }
      console.log('GET /users/',req.params.id);
      res.status(200).jsonp(users);
    });
  };

  //POST - Insert a new User in the DB
  this.add = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var user = new User({
      user:    req.body.user,
      password: 	  req.body.password
    });

    user.save(function(err, user) {
      if(err) {
        return res.send(500, err.message);
      }
      res.status(200).jsonp(user);
    });
  };

  //PUT - Update a register already exists
  this.update = function(req, res) {
    User.findById(req.params.id, function(err, user) {
      user.user   = req.body.user;
      user.password    = req.body.password;

      user.save(function(err) {
        if(err){
          return res.send(500, err.message);
        }
        res.status(200).jsonp(user);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  this.delete = function(req, res) {
    User.findById(req.params.id, function(err, user) {
      user.remove(function(err) {
        if(err) {
          return res.send(500, err.message);
        }
        res.status(200);
      })
    });
  };


  /*this.create = function(req, res, next){
   if(req.body.user === undefined || req.body.password === undefined || req.body.user === '' || req.body.password === ''){
   return res.send('Hay campos vacios');
   }
   var user = new User(req.body);
   user.save(function(err){

   if(err){
   return next(err);
   }else{
   res.json(user);
   }
   });
   };

   this.read = function(req, res, next){

   User.find({}, function(err, data){
   if(err){
   return next(err);
   }else{
   res.json(data);
   }
   });

   };*/

}).apply(userController)

module.exports = userController;
