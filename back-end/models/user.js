module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("user", {
		googleId: Sequelize.STRING,
		name: Sequelize.STRING,
		photoUrl: Sequelize.STRING,
		distance: Sequelize.INTEGER
	});
	return model;
};