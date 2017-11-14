let db = require('../models');
let Food = db.models.Food;


// INDEX ROUTE - FAVORITES PAGE
function index(req, res) {
	Food.findAll().then(function(food) {
		console.log("you've hit the food index route");
		res.json(food);
	});
}

// SHOW ONE - MATCHED PAGE
function show(req, res) {
	Food.findById(req.params.id)
	.then(function(food) {
		if(!food) res.send("food was not found");
		console.log("you have hit the food show route");
		res.json(food);
	});
}


//CREATE A NEW FOOD - USER FAVORITED
function create(req, res) {
	let body = req.body;

	Food.create({
		photoUrl: body.image,
		restaurantId: null, // TODO: add fancy Sequelize mapping between food and restaurants here
		wasSeen: false
	}).then(function(food) {
			if(!food) res.send("food not saved");
			console.log("You've hit the food create route");
			res.json(food);
	});
}

// UPDATE - ??
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

// DESTROY - FAVORITES PAGE

function destroy(req, res) {
	Food.findById(req.params.id)
	.then(function(food) {
		if(!food) res.send("food was not found");
		console.log("you hit the food destroy route");
		return food.destroy();
	})
	.then(function() {
		res.send("food was deleted");
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
//////////////// COPY OF FOOD MODEL FOR REFERENCE ////////////////

		// photoref: Sequelize.STRING, 
		// width: Sequelize.INTEGER,
		// restaurantId: Sequelize.INTEGER,
		// wasSeen: Sequelize.BOOLEAN
		//foodType: Sequelize.STRING
		//favorited: Sequelize.ARRAY(Sequelize.INTEGER),