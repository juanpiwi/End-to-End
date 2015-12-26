'use strict';

const User = require('../models/User.js');
const service = require('../lib/tokenJWT.js');


let userController = {};

(function() {

  //GET - Return all users in the DB
  this.findAll = (req, res) => {
    User.find((err, users) => {
      if (err) {
        res.sendStatus(500).jsonp(err);
      }
      console.log('GET /users');
      res.status(200).jsonp(users);
    });
  };

  //GET - Return a User with specified ID
  this.findById = (req, res) => {
    User.findById(req.params.id, (err, users) => {
      if (err) {
        res.sendStatus(500).jsonp(err);
      }
      console.log('GET /users/', req.params.id);
      res.status(200).jsonp(users);
    });
  };

  //POST - Insert a new User in the DB
  this.add = (req, res) => {
    console.log('POST');
    console.log(req.body);

    let user = new User({
      user: req.body.user,
      password: req.body.password
    });

    user.save((err, user) => {
      if (err) {
        return res.sendStatus(500).jsonp(err);
      }
      res.status(200).jsonp(user);
    });
  };

  //PUT - Update a register already exists
  this.update = (req, res) => {
    User.findById(req.params.id, (err, user) => {
      user.user = req.body.user;
      user.password = req.body.password;

      user.save((err) => {
        if (err) {
          return res.sendStatus(500).jsonp(err);
        }
        res.status(200).jsonp(user);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  this.delete = (req, res) => {
    User.findById(req.params.id, (err, user) => {
      user.remove((err) => {
        if (err) {
          return res.sendStatus(500).jsonp(err);
        }
        res.status(200);
      })
    });
  };

  //SIGN UP
  this.emailSignup = (req, res) => {
    let user = new User({
      user: req.body.user,
      password: req.body.password,
      email: req.body.email
    });

    user.save((err, user) => {
      if (err) {
        return res.sendStatus(500).jsonp(err);
      }
      res.status(200).jsonp({
        token: service.createToken(user)
      });
    });

  };

  //SIGN IN
  this.emailLogin = (req, res) => {
    User.findOne({
      email: req.body.email.toLowerCase()
    }, (err, user) => {
      if (err) {
        return res.sendStatus(500).jsonp(err);;
      }
      if (user.length > 0 && user.password === req.body.password) {
        return res
          .status(200)
          .jsonp({
            token: service.createToken(user)
          });
      } else {
        return res
          .status(200)
          .jsonp({
            msj: "Invalid"
          });
      }
    })

  }



}).apply(userController)

module.exports = userController;
