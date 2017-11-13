module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("userFood", {
		userId: Sequelize.INTEGER,
		foodId: Sequelize.INTEGER,
	});
	return model;
};