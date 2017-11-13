const db = require('../models');
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

	let options = { 
		method: 'GET',
		url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
		qs: {
			// TODO: need to update the location to grab it from the user's geolocation on the front end
			location: '39.743158,-104.970044',
			// TODO: need to search the database for the user's distance setting (default: set to ??)
			radius: '500',
			type: 'restaurant', 
			opennow: 'true',
			key: process.env.clientSecret || keys.placesAPIKey
		}
	};

	//////////////////////////////////////
	// MAKES THE GOOGLE PLACES API CALL //
	//////////////////////////////////////

	request(options, function(err, res, body) {
		if (err) return err;
		body = JSON.parse(body);
		let restaurantsArray = [];

		/////////////////////////////////////////////////////////////////////
		// LOOPS THROUGH ALL THE RESTAURANTS TO CREATE A RESTAURANTS ARRAY //
		/////////////////////////////////////////////////////////////////////
		// TODO: convert this all to sequelize to CRUD to the database instead

		for (let i = 0; i < body.results.length; i++) {
			let results = body.results[i];

			let restaurantObject = {
				name: results.name,
				googleId: results.id,
				placeId: results.place_id,
				latitude: results.geometry.location.lat, 
				longitude: results.geometry.location.lng,
				rating: results.rating
			};

			restaurantsArray.push(restaurantObject);
		}

		// console.log(restaurantsArray.length);
		// console.log(restaurantsArray);

		//////////////////////////////////////////////////
		// MAKES THE GOOGLE PLACES **DETAILS** API CALL //
		//////////////////////////////////////////////////
		// TODO: change this to loop through ALL the restaurants for the call

		console.log('RESTAURANT: ');
		console.log(restaurantsArray[0]);
		console.log('ID: ');
		console.log(restaurantsArray[0].placeId);

		let options = {
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/details/json',
			qs: {
				placeid: restaurantsArray[0].placeId,
				key: process.env.clientSecret || keys.placesAPIKey
			}
		};

		request(options, function (error, response, body) {
		  if (error) throw new Error(error);

		  /////////////////////////////////////////////////////////////////////
			// LOOPS THROUGH ALL THE RESTAURANTS TO CREATE A RESTAURANTS ARRAY //
			/////////////////////////////////////////////////////////////////////

		  console.log(body);
		  /*
		  result.photos
			result.photos.photo_reference
			result.photos.width
			reviews array
			reviews.text
			website
			*/
		});

	});
}

				
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

module.exports.index = index;

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