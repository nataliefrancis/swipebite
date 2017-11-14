let db = require('../models');
let Restaurant = db.models.Restaurant;

// INDEX OF RESTAURANTS -- ??
function index(req, res) {
	res.json('hitting the restaurant.index controller on the back end');
}

// CREATE A NEW RESTAURANT - MAIN PAGE SWIPE RIGHT
function create(req, res) {
	console.log('hitting the restaurant.create controller on the back end');
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

// SHOW ONE RESTAURANT - MATCHED PAGE FOR GOOGLE MAPS LINK
function show(req, res) {
	console.log(req.params.id);

	Restaurant.findById(req.params.id)
		.then((restaurant, err) => {
			if(err) { res.json (err); }
			console.log('hitting the restaurant.show controller on the back end');
			res.json(restaurant);
		});
}

// UPDATE RESTAURANT -- ??
function update(req, res) {
	res.json('hitting the restaurant.update controller on the back end');
	/*
	// updates restaurant info in the DB with additional details
			db.Restaurant.update(restaurantObjectUpdate, {where: {googleId: restaurantObjectUpdate.googleId}})
			.then((err) =>{
				if (err) { console.log(err); }
				if (!restaurantObjectUpdate) { console.log('restaurant is not found'); }
			});
	*/
}

// DELETE RESTAURANT -- ??
function destroy(req, res) {
	res.json('hitting the restaurant.destroy controller on the back end');
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