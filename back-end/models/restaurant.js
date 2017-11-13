module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("restaurant", {
		name: Sequelize.STRING,
		googleId: Sequelize.STRING,
		placeId: Sequelize.STRING,
		latitude: Sequelize.STRING, 
		longitude: Sequelize.STRING, 
		address: Sequelize.STRING,
		rating: Sequelize.STRING,
		url: Sequelize.STRING //optional
	});
	return model;
};