module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("food", {
		photoUrl: Sequelize.TEXT, //because they are longer than the String allowed max of 255 characters
		restaurantId: Sequelize.INTEGER,
		wasSeen: Sequelize.BOOLEAN,
		//foodType: Sequelize.STRING
	});
	return model;
};