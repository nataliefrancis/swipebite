const express = require('express');
const app = express();
const path = require('path');
const routes = require('./config/routes');
const passport = require('./config/passport'); //(passport)
let port = process.env.PORT || 3000;
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// BODY PARSER
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// PASSPORT SETUP
// app.use(session({ secret: 'Swipebite' }));
// app.use(passport.initialize());
// app.use(passport.session());

////////////////
// MIDDLEWARE //
////////////////

//CORS setup to allow other ports from this host
//Only needed if on localhost/not on Heroku
if(!process.env.DYNO) {
	app.use(function(req, res, next) {
	  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
	  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
	  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	  next();
	});
}

// PERSISTS THE CURRENT USER
// app.use((req,res,next) => {
// 	res.locals.currentUser = req.user;
// 	console.log(req.user);
// 	next();
// });

////////////
// ROUTES //
////////////

// BACK END ROUTES
app.use('/auth', routes);

// SERVE UP FRONT END
app.use(express.static(__dirname + '/dist'));

// FRONT END ROUTES
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, function() {
	console.log(`Listening on port ${port}`);
});