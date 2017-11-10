const router = require('express').Router();
const passport = require('passport');

// auth logout
router.get('/logout', (req, res) => {
	//handle with passport
	res.send('logging out');
});

// auth with Google
router.get('/google', 
	passport.authenticate('google', 
		{ scope: ['profile'] }
	)
);

//(req, res) => {
	// console.log(req);
	// console.log(res);
		
	//} 

// callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
	res.json('you reached the callback URI');
});

module.exports = router;