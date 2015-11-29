'use strict';

const config = require('./../config/config');
const path = require('path');
const favicon = require('serve-favicon');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./router');


/**
 * This object is the specification of the server. Executes express and configures all settings, middlewares & routes controllers
 * @type {express}
 */
const app = express();


// SETTINGS
// Enable or Disable the cache for the views
app.set('view cache', config.viewCache);


// MIDDLEWARES
//favicon in /public
app.use(favicon(path.join(__dirname, '../public/images/favicon.ico')));
// Here goes the routing for view the statics assets (only if is enabled in configuration file)
if (config.viewStaticFiles) {
  app.use('/', express.static(path.join(__dirname, '../public/')));
}
// Here goes the routing for view the documentation (only if is enabled in configuration file)
if (config.viewDocumentation) {
  app.use('/doc', express.static(path.join(__dirname, '../doc/')));
}
// Show log of all requests on the console
if (config.requestLogConsole) {
  const morgan = require('morgan');
  app.use(morgan('dev'));
}
// Parsers
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); //This object will contain key-value pairs, where the value can be a string or array
//app.use(multer()); // for parsing multipart/form-data

app.use(methodOverride());

// ROUTES
app.use('/', routes);
/*
 // catch 404 and forward to error handler
 app.use(function(req,res,next){
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
 });

 //error handlers

 //development error handlers
 if(app.get('env') === config.environment) {
 app.use(function (err, req, res){
 res.status(err.status || 500);
 res.render('error', {
 message: err.message,
 error: err
 });
 });
 }
 */
//production error handler
/*app.use(function (err, req, res, next){
 res.status(err.status || 500);
 res.render('error', {
 message: err.message,
 error: {}
 });
 });*/


module.exports = app;
