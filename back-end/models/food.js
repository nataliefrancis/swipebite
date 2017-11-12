module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("food", {
		foodType: Sequelize.STRING,
		image: Sequelize.OBJECT, //not sure what type this will be
		restaurant: Sequelize.INTEGER
	});
	return model;
};