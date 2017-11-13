module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("food", {
		photoref: Sequelize.STRING, //not sure what type this will be
		width: Sequelize.INTEGER,
		restaurantId: Sequelize.INTEGER,
		wasSeen: Sequelize.BOOLEAN,
		//foodType: Sequelize.STRING
		favoritedBy: Sequelize.INTEGER 
	});
	return model;
};