module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("user", {
		googleId: Sequelize.STRING,
		name: Sequelize.STRING,
		photoUrl: Sequelize.STRING, //Should use CHAR?
		favorites: Sequelize.ARRAY(Sequelize.NUMBER), //not sure if this is correct
		distance: Sequelize.INTEGER
	});
	return model;
};