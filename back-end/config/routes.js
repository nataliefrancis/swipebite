const router = require('express').Router();
const passport = require('passport');
const apiController = require('../controllers/api');
const firebaseController = require('../controllers/firebase');

////////// FIREBASE ROUTES /////////////

// auth with Google
router.get('/firebase/google', firebaseController.login); 
// (req, res) => { 
// 	res.json('hitting the new firebase login route');
// });

////////// PASSPORT ROUTES /////////////

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

///////////// API ROUTES //////////////

router.post('/api/places', apiController.show);

router.get('/api/redirect', (req, res) => {
	res.json('oh heyyyyy');
});

module.exports = router;