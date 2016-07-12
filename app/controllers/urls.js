// This file will act as a hub for all your specific routings.


// loading your specific routes here (here, from routes.js)
var Route = require('./routes');


module.exports = function(app) {

  "use strict";

  // using default routes
  app.use('/', Route);

  // You can set multiple URLs for differnt modules of your app like blog, gallery, etc
  // which iteself requires various internal routings like /blog/article/2016/07/02, etc.
  // To achieve this just load all the routes
  //
  // var Route = require('./routes');
  // var blogRoute = require('./blogRoutes');
  // var galleryRoute = require('./galleryRoutes');
  //
  // and attach them as per your requirements
  //
  // app.use('/', Route)
  // Routes defined in routes.js will be prefixed by "/"
  //
  // app.use('/blog', blogRoute);
  // Routes defined in blogRoute.js will be automatically prefixed by "/blog/"
  //
  // app.use('/gallery', galleryRoute)
  // Routes defined in galleryRoute.js will be automatically prefixed by "/gallery/"



};
