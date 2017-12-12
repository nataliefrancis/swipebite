const Sequelize = require('sequelize');
let user_name;
let keys;
if(!process.env.DYNO) {
	keys = require('../config/env');
	user_name = keys.dbUsername;
}


const sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${user_name}@localhost:5432/swipebite`);

// EXPORTS MODELS AND SEQUELIZE FOR DB SETUP
module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;

// IMPORT DB MODELS
const User = sequelize.import('./user');
const Restaurant = sequelize.import('./restaurant');
const Food = sequelize.import('./food.js');
const UserFood = sequelize.import('./userFood');

// DB RELATIONSHIPS
Food.belongsTo(Restaurant);
Restaurant.hasOne(Food);

Food.belongsTo(User);
User.hasMany(Food);

// this would be ideal
// User.hasMany(Food);
// Food.hasMany(User);

module.exports.models = {
	User : User,
	Restaurant: Restaurant,
	Food: Food,
	UserFood: UserFood
};