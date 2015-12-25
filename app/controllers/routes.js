
/* here you will define all routings explicitly */

var config = require('../helpers/config.json');

exports.index = function(req, res){
  
  res.render('index', {'title':"welcome", "appName":config.appName});

};
