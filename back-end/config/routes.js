const router = require('express').Router();
const passport = require('passport');
const apiController = require('../controllers/api');
const usersController = require('../controllers/users');
const foodsController = require('../controllers/foods');
const restaurantsController = require('../controllers/restaurants');
const authController = require('../controllers/authentication');

/////////////////////////////////////////////////////
///////////// GOOGLE PLACES API ROUTES //////////////
/////////////////////////////////////////////////////

router.post('/api/places', apiController.show);

////////////////////////////////////
////////// USER ROUTES /////////////
////////////////////////////////////

// index 
router.get('/api/users', usersController.index);

// create
router.post('/api/users', usersController.create);

// show
router.get('/api/users/:id', usersController.show);

// update 
router.put('/api/users/:id', usersController.update);

// destroy
router.delete('/api/users/:id', usersController.destroy);

////////////////////////////////////
////////// FOOD ROUTES /////////////
////////////////////////////////////

// index 
router.get('/api/foods', foodsController.index);

// create
router.post('/api/foods', foodsController.create);

// show
router.get('/api/foods/:id', foodsController.show);

// update 
router.put('/api/foods/:id', foodsController.update);

// destroy
router.delete('/api/foods/:id', foodsController.destroy);

//////////////////////////////////////////
////////// RESTAURANT ROUTES /////////////
//////////////////////////////////////////

// index 
router.get('/api/restaurants', restaurantsController.index);

// create
router.post('/api/restaurants', restaurantsController.create);

// show
router.get('/api/restaurants/:id', restaurantsController.show);

// update 
router.put('/api/restaurants/:id', restaurantsController.update);

// destroy
router.delete('/api/restaurants/:id', restaurantsController.destroy);

////////////////////////////////////////
////////// PASSPORT ROUTES /////////////
////////////////////////////////////////

// auth logout
router.get('/auth/logout', authController.getLogout);

// auth with Google
router.get('/auth/google', authController.googleLogin);

// callback route for google to redirect to
router.get('/auth/google/redirect', authController.googleCallback);

/////////////////////////////////////////
////////// FRONT END ROUTES /////////////
/////////////////////////////////////////

router.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

module.exports = router;