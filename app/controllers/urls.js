// file will act as a hub for all routings.


// load your specific routes here
var myRoute = require('./routes');


module.exports = function(app) {

  "use strict";

  // using your defines routes
  app.use('/', myRoute);
  // it may be
  // app.use('/app', myRoute);
  // then you have to open http://localhost:3000/app/


};
