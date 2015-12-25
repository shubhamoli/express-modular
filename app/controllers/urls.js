
"use strict"

// file which act a hub for all routings.

var routes = require('./routes');


module.exports = function(app) {
  
  // Define routes here
  app.get('/', routes.index);
  
}; 
