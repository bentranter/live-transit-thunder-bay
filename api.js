/**
 * Feed URLs
 *
 * http://api.nextlift.ca/gtfs-realtime/vehicleupdates.pb
 * http://api.nextlift.ca/gtfs-realtime/tripupdates.pb
 * http://api.nextlift.ca/gtfs-realtime/alerts.pb
 */

'use strict';

// Module dependencies
var request = require('request');
var gtfs    = require('gtfs-realtime-bindings');

exports.showEndpoints = function(req, res) {
  res.json({
    'vehicle_updates_url': '/vehicleupdates',
    'trip_updates_url': '/tripupdates',
    'alerts_url': '/alerts'
  });
};

// Configure request settings
var vehicleUpdateRequestSettings = {
  method: 'GET',
  url: 'http://api.nextlift.ca/gtfs-realtime/vehicleupdates.pb',
  encoding: null
};

exports.getVehicleUpdates = function(req, res) {
  request(vehicleUpdateRequestSettings, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var feed = gtfs.FeedMessage.decode(body);
      res.json(feed.entity);
    }
  });
}

var tripUpdateRequestSettings = {
  method: 'GET',
  url: 'http://api.nextlift.ca/gtfs-realtime/tripupdates.pb',
  encoding: null
};

exports.getTripUpdates = function(req, res) {
  request(tripUpdateRequestSettings, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var feed = gtfs.FeedMessage.decode(body);
      res.json(feed.entity);
    }
  });
}

var alertRequestSettings = {
  method: 'GET',
  url: 'http://api.nextlift.ca/gtfs-realtime/alerts.pb',
  encoding: null
};

exports.getAlerts = function(req, res) {
  request(alertRequestSettings, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var feed = gtfs.FeedMessage.decode(body);
      res.json(feed.entity);
    }
  });
}