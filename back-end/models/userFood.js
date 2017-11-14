module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("userfood", {
		userId: Sequelize.INTEGER,
		foodId: Sequelize.INTEGER,
	});
	return model;
};