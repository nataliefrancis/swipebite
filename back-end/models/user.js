module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("user", {
		googleId: Sequelize.STRING,
		name: Sequelize.STRING,
		photoUrl: Sequelize.STRING, //Should use CHAR?
		lat: Sequelize.CHAR,
		long: Sequelize.CHAR,
		distance: Sequelize.INTEGER
	});
	return model;
};