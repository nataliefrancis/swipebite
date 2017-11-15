module.exports = (sequelize, Sequelize) => {
	let model = sequelize.define("food", {
		photoUrl: Sequelize.TEXT, //because this data type is longer than the String allowed max of 255 characters
	});
	return model;
};