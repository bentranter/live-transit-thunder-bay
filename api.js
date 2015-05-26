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

exports.getUpdates = function(req, res) {
  request({
    method: 'GET',
    url: 'http://api.nextlift.ca/gtfs-realtime/' + encodeURIComponent(req.params.feedName) + '.pb',
    encoding: null
  }, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var feed = gtfs.FeedMessage.decode(body);
      res.json(feed.entity);
    }
  });
}