var tables = require("../data/table-data.js");
var waitings = require("../data/waitinglist-data.js");


module.exports = function (app){

	app.get('/api/tables', function(req, res){
		res.json(tables);
	});
	app.get('/api/waitlist', function(req, res){
		res.json(waitings);
		console.log(waitings);
	});


	app.post('/api/tables', function(req, res){

		if (tables.length < 5){
			tables.push(req.body);
			res.json(true);
		}
		else {
			waitings.push(req.body);
			res.json(false);
		}
	});

	app.post('/api/clear', function(req, res){
		tables = [];
		waitings = [];
	});
}; 
