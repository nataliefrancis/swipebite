module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("food", {
		photoref: Sequelize.STRING, //not sure what type this will be
		width: Sequelize.INTEGER,
		restaurantId: Sequelize.INTEGER,
		wasSeen: Sequelize.BOOLEAN,
		// foodType: Sequelize.STRING,
		// favorited: Sequelize.ARRAY(Sequelize.INTEGER), //not sure if this is correct syntax
	});
	return model;
};