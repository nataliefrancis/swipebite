const db = require('../models').models;
const request = require('request');
const rp = require('request-promise');
const keys = require('../config/env');


function show(reqMaster, resMaster) {
	console.log('hit the api.index controller');
	console.log(reqMaster);
	console.log(reqMaster.body);
	//how to get the user if there's a new cookie everytime?
	//let user = req.sessionStore.sessions;
	// let user2 = req.sessionStore.sessions.ajuuA8IF4v7esAtNAZyDbbvOO6j3d9iC; 
	//console.log(user);
	// console.log(user2); 
	// console.log(typeof(user));
	// console.log(typeof(user2));
	// THIS WORKS!!!
	//res.json(user);

	///////////////////////////////////////////////////////////////////////////////////
	// SETS UP THE OPTIONS TO MAKE THE GOOGLE PLACES API CALL FOR THAT SPECIFIC USER //
	///////////////////////////////////////////////////////////////////////////////////

	//DB calls to grab location and distance from that specific user

	let options = { 
		method: 'GET',
		url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
		qs: {
			// TODO: need to update the location to grab it from the user's geolocation on the front end
			location: '39.743158,-104.970044',
			// TODO: need to search the database for the user's distance setting (default: set to ??)
			radius: '500',
			type: 'restaurant', //can we add food? 
			opennow: 'true',
			key: process.env.clientSecret || keys.placesAPIKey
		}
	};

	////////////////////////////////////////
	// 1. ORIGINAL GOOGLE PLACES API CALL //
	////////////////////////////////////////

	request(options, function(err1, res1, body1) {
		if (err1) return err1;
		body1 = JSON.parse(body1);
		let restaurantsArray = [];

		// Loops through all the returned restaurants to create a restaurants array 
		for (let i = 0; i < body1.results.length; i++) {
			let results = body1.results[i];

			let restaurantObject = {
				name: results.name,
				googleId: results.id,
				placeId: results.place_id,
				latitude: results.geometry.location.lat, 
				longitude: results.geometry.location.lng,
				address: null,
				rating: results.rating,
				url: null
			};
			restaurantsArray.push(restaurantObject);
		}

		console.log('number of restaurants: ');
		console.log(restaurantsArray.length);

		// Randomly choose 1 restaurant from that restaurants array
		let n = Math.floor((Math.random() * restaurantsArray.length));

		// Creates a new restaurant in the DB
		db.Restaurant.create({
			name: restaurantsArray[n].name,
			googleId: restaurantsArray[n].googleId,
			placeId: restaurantsArray[n].placeId,
			latitude: restaurantsArray[n].latitude, 
			longitude: restaurantsArray[n].longitude,
			address: restaurantsArray[n].address,
			rating: restaurantsArray[n].rating,
			url: restaurantsArray[n].url
			}).then((restaurant, err) => {
				if (err) { console.log(err); }
				console.log('new restaurant create ' + restaurant);
			});


		/////////////////////////////////////////////////////////////////////
		// 2. GOOGLE PLACES **DETAILS** API CALL FOR ONE RANDOM RESTAURANT //
		/////////////////////////////////////////////////////////////////////

		let options = {
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/details/json',
			qs: {
				placeid: restaurantsArray[n].placeId,
				key: process.env.clientSecret || keys.placesAPIKey
			}
		};

		console.log(restaurantsArray[n].name);

		request(options, function (err2, res2, body2) {
		  if (err2) throw new Error(err2);
		  body2 = JSON.parse(body2);
			let photosArray = [];
			let result = body2.result;

		  ///////////////////////////////////////////////////////////
			// LOOPS THROUGH ALL THE PHOTOS TO CREATE A PHOTOS ARRAY //
			///////////////////////////////////////////////////////////
			// Loops through all the photos to create a photos array
			// TODO: this needs to be turned to Sequelize to Create the Photos table rows

			for (let i = 0; i < result.photos.length; i++) {
				let photoObject = {
					photoref: result.photos[i].photo_reference,
					width: result.photos[i].width,
					wasSeen: false
				};
				photosArray.push(photoObject);
			}

			//////////////////////////////////////////
			// UPDATES DETAILS ABOUT THE RESTAURANT //
			//////////////////////////////////////////

			// Updates details about the restaurant in the database
			let restaurantObjectUpdate = {
				name: result.name,
				googleId: result.id,
				// placeId: result.placeId,
				latitude: result.geometry.location.lat,
				longitude: result.geometry.location.lng,
				address: result.formatted_address,
				rating: result.rating,
				url: result.website
			};

			// updates restaurant info in the DB with additional details
			db.Restaurant.update(restaurantObjectUpdate, {where: {googleId: restaurantObjectUpdate.googleId}})
			.then((err) =>{
				if (err) { console.log(err); }
				if (!restaurantObjectUpdate) { console.log('restaurant is not found'); }
			});

			//////////////////////////////////////////////////////////////////////
			// 3. GOOGLE PLACES **PHOTOS** API CALL FOR SAME RANDOM RESTAURANT  //
			//////////////////////////////////////////////////////////////////////

			// Randomly choose 1 restaurant from that restaurants array
			let k = Math.floor((Math.random() * photosArray.length));

			console.log(photosArray[k].width);
			console.log(photosArray[k].photoref);

			let options = { 
				method: 'GET',
			  url: 'https://maps.googleapis.com/maps/api/place/photo',
			  qs: { 
						maxwidth: photosArray[k].width,
			     photoreference: photosArray[k].photoref,
			     key: process.env.clientSecret || keys.placesAPIKey
					}
			};

			request(options, function (err3, res3, body3) {
			  if (err3) throw new Error(err3);

			  resMaster.json({image: body3});
			});
		});		
	});	
}

module.exports.show = show;

				
////////////////////////////////////// GRAVEYARD /////////////////////////////////////////////

/*
{ 
f4JOdcu88YOxeUOUJrV5Z5vhBp7mokx4: 
	'{
		"cookie":{
			"originalMaxAge":null,
			"expires":null,
			"httpOnly":true,
			"path":"/"
		},

		"passport":{
			"user":{
				"id":1,
				"googleId":"113480942625705319785",
				"name":"Courtney Fay",
				"photoUrl":"https://lh4.googleusercontent.com/-pvp9TSPeKhM/AAAAAAAAAAI/AAAAAAAAGw4/2m5E_z84pko/photo.jpg?sz=50",
				"createdAt":"2017-11-13T14:57:23.314Z",
				"updatedAt":"2017-11-13T14:57:23.314Z"
			}
		}
	}' 
}
*/

// if (body.results[i].photos[0].photo_reference && body.results[i].photos[0].width) {
// 	photoReferenceAPI = body.results[i].photos[0].photo_reference;
// 	widthAPI = body.results[i].photos[0].width;

// 	//loop through to add photo data to an array
// 	

// } else {
// 	photoReferenceAPI = 'no photo reference';
// 	widthAPI = 'no photo width';
// }
	

	/*
	SAMPLE CODE
	var arr = [];
   for ( var counter = 1; counter <= count; counter++)
   {
      arr.push( {
        'src':'css/images/pictures/gal_'+id+'/' + counter + '.jpg',
        'thumb':'css/images/thumbnails/gal_'+id+'/' + counter + '.jpg'
      } );
   }
   return arr;
	*/

/*

SAMPLE CODE TO ADD IN SEQUELIZE WITH TUNR RELATIONSHIPS
var db = require('../models');
var Artist = db.models.Artist;
var Song = db.models.Song;

function index(req, res) {
  Artist.findAll().then(function(artists) {
    res.json(artists);
  });
}

function show(req, res) {
  Artist.findById(req.params.id, { include: Song })
  .then(function(artist){
    if(!artist) res.send("artist not found");
    //Artist.sing();
    //artist.shout();
    res.json(artist);
  });  
}

function create(req, res) {
  Artist.create(req.body).then(function(artist){
    if(!artist) res.send("artist not saved");
    res.json(artist);
  });
}

function update(req, res) {
  Artist.findById(req.params.id)
  .then(function(artist){
    if(!artist) res.send("artist not found");
    return artist.updateAttributes(req.body);
  })
  .then(function(artist){
    res.json(artist);
  });
}

function destroy(req, res) {
  Artist.findById(req.params.id)
  .then(function(artist){
    if(!artist) res.send("artist not found");
    return artist.destroy();
  })
  .then(function(){
    res.send("artist deleted");
  });  
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;
*/