const db = require('../models');
const User = db.models.User;

function index(req, res) {
	res.json('you hit the user.index controller');
}

function create(req, res) {
	console.log('hit the user.create controller');
	console.log(req.body);
	User.create(req.body).then(function(user){
		if(!user) res.send("user not saved");
		else res.json(user);
	});
}

function show(req, res) {
	res.json('you hit the user.show controller');
}

function update(req, res) {
	res.json('you hit the user.update controller');
}

function destroy(req, res) {
	res.json('you hit the user.destroy controller');
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
