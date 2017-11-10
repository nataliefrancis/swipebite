const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./env');

passport.use(
	new GoogleStrategy({
		//options for the Google strategy
		callbackURL: '/auth/google/redirect',
		clientID: process.env.clientID || keys.google.clientID,
		clientSecret: process.env.clientSecret || keys.google.clientSecret
	}, (accessToken, refreshToken, profile, done) => {
		//passport callback function
		console.log('passport callback function fired');
		console.log(profile);
	})
);