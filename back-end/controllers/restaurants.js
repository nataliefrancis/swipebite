let db = require('../models');
let Restaurant = db.models.Restaurant;

function index(req, res) {
	res.json('hitting the restaurant.index controller');
}

// CREATE A NEW RESTAURANT - USER FAVORITED
function create(req, res) {
	console.log('hitting the restaurant.create controller');
	let body = req.body;
	
	Restaurant.create({
		name: body.restaurant.name,
		googleId: body.restaurant.googleId,
		placeId: body.restaurant.placeId,
		latitude: body.restaurant.latitude, 
		longitude: body.restaurant.longitude,
		address: body.restaurant.address,
		rating: body.restaurant.rating,
		url: body.restaurant.url
		}).then((restaurant, err) => {
				if (err) { res.json(err); }
				res.json(restaurant);
	}); 
}

function show(req, res) {
	res.json('hitting the restaurant.show controller');
}

function update(req, res) {
	res.json('hitting the restaurant.update controller');
	/*
	// updates restaurant info in the DB with additional details
			db.Restaurant.update(restaurantObjectUpdate, {where: {googleId: restaurantObjectUpdate.googleId}})
			.then((err) =>{
				if (err) { console.log(err); }
				if (!restaurantObjectUpdate) { console.log('restaurant is not found'); }
			});
	*/
}

//DELETE RESTAURANT
function destroy(req, res) {
	res.json('hitting the restaurant.destroy controller');
	Restaurant.findById(req.params.id)
	.then(function(restaurant){
		if(!restaurant) res.send("restaurant was not found");
		return restaurant.destroy();
	})
	.then(function() {
		res.send("restaurant was deleted");
	});
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;

///////////////// COPY OF RESTAURANT MODEL FOR REFERENCE ////////////////

		// name: Sequelize.STRING,
		// googleId: Sequelize.STRING,
		// placeId: Sequelize.STRING,
		// latitude: Sequelize.STRING, 
		// longitude: Sequelize.STRING, 
		// address: Sequelize.STRING,
		// rating: Sequelize.STRING,
		// url: Sequelize.STRING