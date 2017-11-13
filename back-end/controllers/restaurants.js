let db = require('../models');
let Restaurant = db.models.Restaurant;

let newRest = {
	name: 'See if this works',
	googleId: null,
	placeId: null,
	latitude: null,
	longitude: null,
	address: null,
	rating: null,
	url: null
};

// CREATE A NEW RESTAURANT - USER FAVORITED
function create(req, res) {
	Restaurant.create(req.body).then(function(restaurant) {
		if(!restaurant) res.send("restaurant was not saved");
		res.json(restaurant);
	});
}

//DELETE RESTAURANT
function destroy(req, res) {
	Restaurant.findById(req.params.id)
	.then(function(restaurant){
		if(!restaurant) res.send("restaurant was not found");
		return restaurant.destroy();
	})
	.then(function() {
		res.send("restaurant was deleted");
	});
}

module.exports.create = create;
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