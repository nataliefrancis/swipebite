const passport = require('passport');

const googleLogin = (req, res, next) => {
	console.log('hitting google login controller!');

	let loginStrategy = passport.authenticate('google', {
		scope: [ 'profile' ]
	});
	return loginStrategy(req, res, next);
};

const googleCallback = (req, res, next) => {
	console.log('hitting google callback controller!');

	//Only needed if on localhost/not on Heroku
	if(!process.env.DYNO) {
		baseUrl = 'http://localhost:4200';
	} 

	let authCallbackStrategy = passport.authenticate('google', {
		successRedirect: `${baseUrl}/main`,
		failureRedirect: `${baseUrl}/`

	}); 
	return authCallbackStrategy(req, res, next);
};

const getLogout = (req, res) => {
	console.log('hitting logout controller!');
	req.logout();
	res.redirect('/');
};

module.exports.googleLogin = googleLogin;
module.exports.googleCallback = googleCallback;
module.exports.getLogout = getLogout;