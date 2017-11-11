const DB = require('../models');

DB.sequelize.sync({force: true}).then(() => {
	process.exit();
});