"use strict"

// file which act a hub for all middlewares.

var mids = require('./mids');

module.exports = function(app) {
  
  // Define the routes
  app.use('/', mids.index);
  

}; 
