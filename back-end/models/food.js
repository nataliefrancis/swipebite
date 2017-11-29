module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("food", {
		photoUrl: Sequelize.TEXT, 
		restaurantId: Sequelize.INTEGER,
		wasSeen: Sequelize.BOOLEAN,
		//foodType: Sequelize.STRING
	});
	return model;
};