const router = require('express').Router();
const passport = require('passport');
const apiController = require('../controllers/api');

//////////AUTH ROUTES /////////////

// auth logout
router.get('/auth/logout', (req, res) => {
	//handle with passport
	req.logout();
	res.redirect('/');
});

// auth with Google
router.get('/auth/google', 
	passport.authenticate('google', 
		{ scope: ['profile'] }
	)
);

// callback route for google to redirect to
router.get('/auth/google/redirect', passport.authenticate('google'), (req, res) => {
	res.json(req.user);
	// res.redirect('/api');
});

///////////// PROFILE ROUTES //////////////

// router.get('/profile', (req, res) => { //authCheck, see video 18
// 	res.json("this is your user page, this is your profile" +req.user.name);
// });

///////////// API ROUTES //////////////

router.get('/api/places', apiController.index);
//this TOTALLY works, so it's definitely hitting the right route
// (req, res) => {
// 	res.json('oh heyyyyy');
// });

router.get('/api/redirect', (req, res) => {
	res.json('oh heyyyyy');
});

module.exports = router;