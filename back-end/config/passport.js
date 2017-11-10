const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const clientID 	= ( process.env.clientID || require('./env') );
const clientSecret 	= ( process.env.clientSecret || require('./env') );
// const keys = require('./env');

passport.use(
	new GoogleStrategy({
		//options for the Google strategy
		callbackURL: '/auth/google/redirect',
		clientID: clientID,
		clientSecret: clientSecret
	}, () => {
		//passport callback function
	})
);