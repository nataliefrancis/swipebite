module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("restaurant", {
		name: Sequelize.STRING,
		lat: Sequelize.CHAR, //why do we need this ?
		long: Sequelize.CHAR, //why do we need this ?
		url: Sequelize.STRING, //optional
		price: Sequelize.STRING, //where are we going to get this from?
		rating: Sequelize.STRING,
		reviewLink: Sequelize.STRING,
		open: Sequelize.BOOLEAN 
	});
	return model;
};