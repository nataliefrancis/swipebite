const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./env');
const DB = require('../models').models;

module.exports = function(passport) {

	////////////////////////////////////
	// SERIALIZE AND DESERIALIZE USER //
	////////////////////////////////////

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((id, done) => {
		//video tutorial 15
		// User.findById(id).then ((user) => {
		// 	done(null, id);
		// });
		done(null, id);
	});

	/////////////////////
	// GOOGLE STRATEGY //
	/////////////////////

	passport.use(
		new GoogleStrategy({
			//options for the Google strategy
			callbackURL: '/auth/google/redirect',
			clientID: process.env.clientID || keys.google.clientID,
			clientSecret: process.env.clientSecret || keys.google.clientSecret
		}, (accessToken, refreshToken, profile, done) => {
			//passport callback function
			DB.User.find({where: {'googleId': profile.id}}).then((user, err) => {
				if (err) {
					console.log(err);
					return done(err);
				}
				if (user) {
					console.log('logging in user');
					return done(null, user);
				} else {
					console.log('creating new user');
					DB.User.create({
						googleId: profile.id,
						name: profile.displayName, 
						photoUrl: profile.photos[0].value,
					}).then((user) => {
						console.log('new user created');
						return done(null, user);
					});
				}
			});
		})
	);

};
