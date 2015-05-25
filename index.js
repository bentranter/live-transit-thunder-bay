'use strict';

// Module dependencies
var express = require('express');
var http    = require('http');
var api     = require('./api');

var app = express();

// Configure Express
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// API Endpoints
app.get('/', api.showEndpoints);
app.get('/vehicleupdates', api.getVehicleUpdates);
app.get('/tripupdates', api.getTripUpdates);
app.get('/alerts', api.getAlerts);


// Serve
http.createServer(app)
  .listen(app.get('port'), function () {
    console.log('Express started on port 3000');
  });