module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("restaurant", {
		name: Sequelize.STRING,
		url: Sequelize.STRING,
		location: Sequelize.OBJECT,
		price: Sequelize.OBJECT,
		rating: Sequelize.OBJECT,
		reviewLink: Sequelize.STRING,
		open: Sequelize.BOOLEAN 
	});
	return model;
};