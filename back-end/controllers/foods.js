let db = require('../models');
let Food = db.models.Food;


// INDEX OF FOODS - FAVORITES PAGE
function index(req, res) {
	Food.findAll().then(function(food) {
		console.log("you've hit the food index route");
		res.json(food);
	});
}

// SHOW ONE FOOD - MATCHED PAGE
function show(req, res) {
	Food.findById(req.params.id)
		.then(function(food) {
			if(!food) res.send("food was not found");
			console.log("you have hit the food show route");
			res.json(food);
	});
}

//CREATE A NEW FOOD - MAIN PAGE SWIPE RIGHT
function create(req, res) {
	let body = req.body;
	console.log('we hit the createFood function on the DB side:');
	console.log(body);

	Food.create({
		photoUrl: body.photoUrl,
		// restaurantId: null, // TODO: add fancy Sequelize mapping between food and restaurants here
		// wasSeen: false
	}).then(function(food) {
			if(!food) res.send("food not saved");
			console.log("You've hit the food create route");
			res.json(food);
	});
}

// UPDATE FOOD - MATCHED PAGE, UPDATE WASSEEN BOOLEAN
function update(req, res) {
	Food.findById(req.params.id)
	.then(function(food) {
		if(!food) res.send("food is not found");
		console.log("you hit the food update route");
		return food.updateAttributes(req.body);
	})
	.then(function(food) {
		console.log("you're hit the food update route");
		res.json(food);
	});
}

// DESTROY FOOD - FAVORITES PAGE
function destroy(req, res) {
	console.log("hitting the destroy food route in the back end");
	console.log(req.params.id);
	Food.findById(req.params.id)
	.then(function(food) {
		if(!food) res.send("food was not found");
		console.log("you hit the food destroy route");
		return food.destroy();
	})
	.then(function() {
		res.json("food was deleted");
	});
}

// RETURNS THE USER'S FAVORITE FOODS
function getSome(req, res) {
	res.json('hitting the function getSome!');
}

// RETURNS THE FAVORITED FOOD THAT WAS MOST RECENTLY SAVED TO THE DATABASE
function showFood(req, res) {
	

	// TODO: add in a lookup with current user id
	// 1. look up most recent food in SQL table
	console.log("hitting the function showFood");
	console.log(req.params.id);
	console.log(req.body);

	/*let id = 11;
	
	Food.findById(11
		//{
		//where: { id: }, 
		//order: sequelize.col('createdAt DESC')
			//[[ 'createdAt', 'DESC' ]]
		//}
	).then(function(food, err){
		if (err) console.log(err); 
		res.json(food);
	});*/

	/*YourModel.findAll({
	  limit: 1,
	  where: {
	    //your where conditions, or without them if you need ANY entry
	  },
	  order: [ [ 'createdAt', 'DESC' ]]
	}).then(function(entries){

	  //only difference is that you get users list limited to 1
	  //entries[0]
	}); */
	// 2. use food.restaurantId to grab the most recent restaurant details
	// 3. serve up both the food and restaurant details back to the front
	res.json("hitting the function showFood");
}

module.exports.showFood = showFood;
module.exports.getSome = getSome;
module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
