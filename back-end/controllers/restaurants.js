let db = require('../models');
let Restaurant = db.models.Restaurant;

// INDEX OF RESTAURANTS - ADMIN
function index(req, res) {
	Restaurant.findAll().then(function(restaurant) {
		console.log("hitting the restaurant.index controller on the back end");
		res.json(restaurant);
	});
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
		url: body.image
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

// UPDATE RESTAURANT -- ADMIN
function update(req, res) {
  Restaurant.findById(req.params.id)
  .then((restaurant, err) => {
      if (err) { res.json(err); }
      if(!restaurant) res.send("Restaurant was not found");
      return restaurant.updateAttributes(req.body);
  })
  .then((restaurant) => {
      res.json(restaurant);
  });
}

// DELETE RESTAURANT -- ADMIN
function destroy(req, res) {
	console.log('id on the back end:');
	console.log(req.params.id);
	Restaurant.findById(req.params.id)
	.then(function(restaurant){
		if(!restaurant) res.send("restaurant was not found");
		return restaurant.destroy();
	})
	.then(function() {
		res.json({message: 'Restaurant was deleted'});
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