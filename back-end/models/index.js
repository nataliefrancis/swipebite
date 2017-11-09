let user_name = require('../.env');
//process.env.user_name ||

let sequelize = new Sequelize(process.env.DATABASE_URL || `postgres://${user_name}@localhost:5432/swipebite`);