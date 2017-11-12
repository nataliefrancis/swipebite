module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("restaurant", {
		name: Sequelize.STRING,
		lat: Sequelize.CHAR,
		long: Sequelize.CHAR,
		url: Sequelize.STRING,
		price: Sequelize.OBJECT,
		rating: Sequelize.OBJECT,
		reviewLink: Sequelize.STRING,
		open: Sequelize.BOOLEAN 
	});
	return model;
};