/* here you will define all routings explicitly */

var express = require('express');
var router = express.Router();


// defining route for: http://localhost:3000
router.get('/', function(req, res){

  res.render('index');

});
// define your other routes here

// exports router object
module.exports = router;
