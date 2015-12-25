
"use strict"

// Include the Node Modules
var http = require('http');
var config = require('./app/helpers/config.json');
var express = require(config.MODULES_DIR_GLOBAL+'express');


var app = express();




// Set the view engine
app.set('view engine','jade');
// Where to find the view files
app.set('views', config.APP_DIR+'views');

// for prettier HTML output in dev mode
if (app.get('env') === 'development') {
  
  app.locals.pretty = true;

}

// Some neccessary Middlewares

app.use(express.static(config.APP_DIR+'public'));

// Explicitly adding the router middleware
app.use(express.Router());

var midwares = require(config.APP_DIR+'middlewares/middleware')(app);

// Pass the Express instance to the routes module
var routes = require(config.APP_DIR+'controllers/urls')(app);

// Start the app
http.createServer(app).listen(config.port, function() {
  console.log('App started');
});

