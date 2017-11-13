module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("userRestaurant", {
		userId: Sequelize.INTEGER,
		restaurantId: Sequelize.INTEGER,
	});
	return model;
};