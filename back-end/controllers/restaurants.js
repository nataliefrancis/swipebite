let db = require('../models');
let Restaurant = db.models.Restaurant;
let Food = db.models.Food;

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
	
	//TODO: figure out how to create the relationship between food and user id!

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
				/*Food.create({
					photoUrl: body.image,
					restaurantId: restaurant.id
				}).then((food, err) => {
					if (err) { res.json(err); }
					res.json("I think this is where we're breaking");
				});*/
		}); 
}

/*
  ARTISTS == RESTAURANTS
  SONGS == FOODS
  LUCY SONGS - array of songs

   var artistCreate = function(manager) {
   return DB.Artist.create({
     name: 'Luciano Pavarotti',
     photoUrl: 'http://img.informador.com.mx/biblioteca/imagen/677x508/811/810055.jpg',
     nationality: 'Italiano',
     instrument: 'Voice',
     home_address: '1 Strada Roma',
     managerId: manager.id
   })
     .then(function(artist) {
          lucySongs.forEach(function(song) {
               song.artistId = artist.id;
          });
          DB.Song.bulkCreate(lucySongs);
     });
   };
    */

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