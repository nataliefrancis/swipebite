let db = require('../models');
let Food = db.models.Foods;

//SAVE A NEW FOOD - USER FAVORITED

function create(req, res) {
	Food.create(req.body).then(function(food) {
		if(!food) res.send("food not saved");
		res.json(food);
	});
}

module.exports.create = create;

//////////////// COPY OF FOOD MODEL FOR REFERENCE ////////////////

		// photoref: Sequelize.STRING, 
		// width: Sequelize.INTEGER,
		// restaurantId: Sequelize.INTEGER,
		// wasSeen: Sequelize.BOOLEAN
		//foodType: Sequelize.STRING
		//favorited: Sequelize.ARRAY(Sequelize.INTEGER),