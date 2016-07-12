// This file contains all post-request middlewares

module.exports = function(app){

  app.use(function(res, req, next){
    // define your middleware task here
    next();
  });

  // define some more middlewares here
  
};
