// index.js
var express = require('express');
var feed = require('feed-read');
var app = express();

// Setup frontend 
// Serve static HTML, CSS & JS files out of the app directory
app.use(express.static('app'));

// Implement RSS loadfeed action
app.get('/loadfeed', function(req, res) {
	var rssfeed = req.query["rssfeed"];
	
	feed(rssfeed, function(err, articles) {
		if(err) throw err;
		res.send( articles );	
	});
});

// Setup server to listen for requests on port 8080
app.listen(8080);

console.log('Sample RSS Reader running at http://127.0.0.1:8080/');

