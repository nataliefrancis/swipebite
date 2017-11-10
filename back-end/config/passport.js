const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./env');

passport.use(
	new GoogleStrategy({
		//options for the Google strategy
		callbackURL: '/auth/google/redirect',
		clientID: keys.google.clientID,
		clientSecret: keys.google.clientSecret
	}, () => {
		//passport callback function
	})
);