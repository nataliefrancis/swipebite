const Sequelize = require('sequelize');
const keys = require('../config/env');
const user_name = keys.dbUsername;

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${user_name}@localhost:5432/swipebite`);

// EXPORTS MODELS AND SEQUELIZE FOR DB SETUP
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

const User = sequelize.import('./user');

module.exports.models = {
	User : User
};