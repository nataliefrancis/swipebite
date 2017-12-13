const router = require('express').Router();
const passport = require('passport');
const apiController = require('../controllers/api');
const usersController = require('../controllers/users');
const foodsController = require('../controllers/foods');
const restaurantsController = require('../controllers/restaurants');
const authController = require('../controllers/authentication');

////////////////////////////////////
////////// USER ROUTES /////////////
////////////////////////////////////

function authenticatedUser(req, res, next) {
	// If user is authenticated then continue execution
	if (req.isAuthenticated()) return next();

	// Otherwise direct request back to the homepage
	res.json({'message': 'Error, user not signed in'});
}

router.route('/auth/currentUser')
	.get(authenticatedUser, usersController.getInfo);

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

////////////////////////////////////////
////////// PASSPORT ROUTES /////////////
////////////////////////////////////////

// router.get('/auth/currentUser', authenticatedUser, usersController.getInfo);

// auth logout
router.get('/auth/logout', authController.getLogout);

// auth with Google
router.get('/auth/google', authController.googleLogin);

// callback route for google to redirect to
router.get('/auth/google/redirect', authController.googleCallback);

/////////////////////////////////////////////////////
///////////// GOOGLE PLACES API ROUTES //////////////
/////////////////////////////////////////////////////

// router.post('/api/places', function(req, res) {
// 	apiController.show()
// 	.then(function() {
// 		// res.json(serveUpRestaurantObject);
// 	});
// }
/*router.put('/api/update/something/:withParam', function(req, res) {
    updateSomething(req.params.withParam)
    .then(function() { res.send(200, 'ok'); });
});*/

// OLD WAY
router.post('/api/places', apiController.show);

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

/////////////////////////////////////
////////// OTHER ROUTES /////////////
/////////////////////////////////////

// get the user's favorite foods
router.get('/api/foods/user/:id', foodsController.getSome);

// get the food that was most recently saved to the database
router.get('/api/foods/restaurant', (req, res) => {
	console.log("hitting the showfood route on the back end");
});
	//foodsController.showFood);


/////////////////////////////////////////
////////// FRONT END ROUTES /////////////
/////////////////////////////////////////

router.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

module.exports = router;