const express = require('express');
const app = express();
const path = require('path');
const routes = require('./config/routes');
const passport = require('./config/passport');

require('dotenv').config();

let port = process.env.PORT || 3000;

// MIDDLEWARE

//CORS setup to allow other ports from this host
//Only needed if not on Heroku/prod
if(!process.env.DYNO) {
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
	  next();
	});
}

app.use(express.static(__dirname + '/dist'));

// ROUTES

//back end routes
app.use('/auth', function(req, res, next) {
	//routes
	// console.log(res.header());
	console.log(req.headers);
});

//front end routes
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});