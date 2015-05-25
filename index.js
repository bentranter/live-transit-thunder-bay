'use strict';

// Module dependencies
var request = require('request');
var gtfs    = require('gtfs-realtime-bindings');

// Configure request
var requestSettings = {
  method: 'GET',
  url: 'http://api.nextlift.ca/gtfs-realtime/tripupdates.pb',
  encoding: null
};

request(requestSettings, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var feed = gtfs.FeedMessage.decode(body);
    feed.entity.forEach(function(entity) {
      if (entity.trip_update) {
        console.log(entity.trip_update);
      }
    });
  }
});