/* here you will define all routings explicitly */

var express = require('express');
var router = express.Router();


// defining route for "/" i.e. http://localhost:3000/
router.get('/', function(req, res){
  // renders view (index.pug) at views/ directory
  res.render('index');

});
// define your other routes here


// finally, export router object to be used by urls.js
module.exports = router;
