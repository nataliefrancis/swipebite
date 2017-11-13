const db = require('../models');
const User = db.models.User;

function create(req, res) {
	console.log('hit the user.create controller');
	console.log(req.body);
	User.create(req.body).then(function(user){
		if(!user) res.send("user not saved");
		else res.json(user);
	});
}

module.exports.create = create;