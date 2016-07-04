
var express = require('express');
var config = require('./app/helpers/config.json');


var app = express();


// Set the view engine
app.set('view engine','pug');
// Where to find the view files
app.set('views', './app/views');


// Some neccessary Middlewares
app.use(express.static('./app/public'));


// Pass the Express instance to the urls module
// see './app/controllers/urls.js' for more
var controller = require('./app/controllers/urls')(app);

// kick off the server
app.listen(config.port, function(err){
  console.log("Application started at http://localhost:"+config.port);
});
