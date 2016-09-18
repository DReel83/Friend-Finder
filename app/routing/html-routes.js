var path = require('path');


module.exports = function(app){
	// Basic route that sends the user first to the AJAX Page
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	})
	// Send user to the survey
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	})
	// sends user to the friends objects
	app.get('/api/friends', function(req, res){
		res.sendFile(path.join(__dirname + '/../routing/friends.js'));
	})
};
