const db = require('../models').models;
const request = require('request');
const requestPromise = require('request-promise');
const keys = require('../config/env');


function index(req, res) {
	console.log('hit the api.index controller');
	//console.log('here is req.user.name: ');
	// console.log(req.user.name);

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

	/////////////////////////////////////////
	// 1. MAKES THE GOOGLE PLACES API CALL //
	/////////////////////////////////////////

	request(options, function(err, res, body) {
		if (err) return err;
		body = JSON.parse(body);
		let restaurantsArray = [];

		/////////////////////////////////////////////////////////////////////
		// LOOPS THROUGH ALL THE RESTAURANTS TO CREATE A RESTAURANTS ARRAY //
		/////////////////////////////////////////////////////////////////////
		// TODO: only save 1 random restaurant to the database

		for (let i = 0; i < body.results.length; i++) {
			let results = body.results[i];

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

		let n = Math.floor((Math.random() * restaurantsArray.length));
		console.log(restaurantsArray.length);
		console.log(n);
		console.log(restaurantsArray);

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


		////////////////////////////////////////////////////////////////////////
		// 2. MAKES THE GOOGLE PLACES **DETAILS** API CALL FOR ONE RESTAURANT //
		////////////////////////////////////////////////////////////////////////

		let options = {
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/details/json',
			qs: {
				placeid: restaurantsArray[n].placeId,
				key: process.env.clientSecret || keys.placesAPIKey
			}
		};

		request(options, function (error, response, body) {
		  if (error) throw new Error(error);
		  body = JSON.parse(body);
			let photosArray = [];
			let result = body.result;

			console.log(body.result);

		  ///////////////////////////////////////////////////////////
			// LOOPS THROUGH ALL THE PHOTOS TO CREATE A PHOTOS ARRAY //
			///////////////////////////////////////////////////////////
			// TODO: this needs to be turned to Sequelize to Create the Photos table rows

			for (let i = 0; i < result.photos.length; i++) {
				let photoObject = {
					photoref: result.photos[i].photo_reference,
					width: result.photos[i].width,
					wasSeen: false
				};
				photosArray.push(photoObject);
			}

			console.log(photosArray);

			//////////////////////////////////////////
			// UPDATES DETAILS ABOUT THE RESTAURANT //
			//////////////////////////////////////////

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

			db.Restaurant.update(restaurantObjectUpdate, {where: {googleId: restaurantObjectUpdate.googleId}})
			.then((err) =>{
				if (err) { console.log(err); }
				if (!restaurantObjectUpdate) { console.log('restaurant is not found'); }
			});

		});


	});
}

module.exports.index = index;

				
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