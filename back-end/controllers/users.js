const db = require('../models');
const User = db.models.User;

// INDEX OF USERS - SENDS ALL
function index(req, res) {
	User.findAll().then(function(user) {
		console.log("hitting the user.index controller on the back end");
		res.json(user);
	});
}

//CREATES A NEW USER
function create(req, res) {
	console.log('hit the user.create controller on the back end');
	console.log(req.body);
	let body = req.body;

	User.create({
		googleId: body.googleId,
		name: body.name,
		photoUrl: body.photoUrl

	}).then(function(user, err){
		if (err) { res.json(err); }
		res.json(user);
	});
}

//SHOW ONE USER
function show(req, res) {
	console.log(req.params.id);

	User.findById(req.params.id)
		.then((user, err) => {
			if(err) { res.json (err); }
			console.log('youre hitting the user.show controller');
			res.json(user);
		});
}

//UPDATE A USER
function update(req, res) {
	User.findById(req.params.id)
	.then((user, err) => {
		if(err) { res.json(err); }
		if(!user) { res.send("User was not found"); }
		return user.updateAttributes(req.body);
	})
	.then((user) => {
		res.json(user);
	});
}


//DELETES A USER
function destroy(req, res) {
	// res.json('you hit the user.destroy controller on the back end');
	User.findById(req.params.id)
		.then((user, err) =>{
			if(err) { res.json (err); }
			if(!user) {console.log('User was not found'); }
			return user.destroy();
		})
		.then(() => {
			res.json('User was deleted');
		});
}

module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;
