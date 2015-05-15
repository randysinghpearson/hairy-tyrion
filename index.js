// index.js
var feed = require('feed-read');

var app = require('express')();

app.get('/loadfeed', function(req, res) {
	var rssfeed = req.query["rssfeed"];
	
	feed(rssfeed, function(err, articles) {
		if(err) throw err;
		res.send( articles );	
	})

});

app.listen(8080);

console.log('Sample RSS Reader running at http://127.0.0.1:8080/');

