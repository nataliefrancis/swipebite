const express = require('express');
const app = express();
const path = require('path');
const routes = require('./config/routes');
const passport = require('./config/passport');
// const cors = require('cors');
// let corsOptions = {
// 	origin: 'http://localhost:3000', //4200 origin is null, 3000 not equivalent to origin 4200
// 	allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
// 	methods: 'POST, GET, OPTIONS, PUT, DELETE',
// 	preFlightContinue: true
// };

require('dotenv').config();

let port = process.env.PORT || 3000;

// MIDDLEWARE

//CORS setup to allow other ports from this host
//Only needed if on localhost/not on Heroku
if(!process.env.DYNO) {
	app.use(function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
	  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	  // res.header('Access-Control-Allow-Credentials', true);
	  console.log(req);
		console.log(res);
	  next();
	});
}

// if(!process.env.DYNO) {
// 	app.use(function(req, res, next) {
// 		cors(corsOptions);
// 		next();
// 	});
// }

// app.options('/auth', cors(corsOptions));

app.use(express.static(__dirname + '/dist'));

// ROUTES

//back end routes
app.use('/auth', routes);

//cors(corsOptions),
	//function(req, res, next) {
	
	//console.log(res.headers);
	//console.log(req.headers);
//}

//front end routes
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});