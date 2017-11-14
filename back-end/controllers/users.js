const db = require('../models');
const User = db.models.User;

// INDEX OF USERS - SENDS ALL
function index(req, res) {
	User.findAll().then(function(user) {
		console.log("hitting the user.index controller on the back end");
		res.json(user);
	});
}

function create(req, res) {
	console.log('hit the user.create controller on the back end');
	console.log(req.body);
	User.create(req.body).then(function(user){
		if(!user) res.send("user not saved");
		else res.json(user);
	});
}

function show(req, res) {
	res.json('you hit the user.show controller on the back end');
}

function update(req, res) {
	res.json('you hit the user.update controller on the back end');
}

function destroy(req, res) {
	res.json('you hit the user.destroy controller on the back end');
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
