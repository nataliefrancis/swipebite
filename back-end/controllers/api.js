const db = require('../models').models;
const request = require('request');
const rp = require('request-promise');
let keys;
if(!process.env.DYNO) {
	keys = require('../config/env');
}

const db2 = require('../models');
const userTable = db2.models.User;

function show(reqMaster, resMaster) {
	console.log('hit the api.show controller');
	let chosenRestaurant = {};
	let photoInfo = {};

	///////////////////////////////////////////////////////////////////////////////////
	// SETS UP THE OPTIONS TO MAKE THE GOOGLE PLACES API CALL FOR THAT SPECIFIC USER //
	///////////////////////////////////////////////////////////////////////////////////

	//getting details for that specific user
	let latitude = reqMaster.body.coordinates.latitude || 39.765200;
	let longitude = reqMaster.body.coordinates.longitude || -104.986117;
	let distance = reqMaster.body.user.distance || '1500' ; // defaults to restaurants within a mile (1500 m) if no distance is specified

	let options = { 
		method: 'GET',
		url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
		qs: {
			location: latitude + ',' + longitude,
			radius: distance,
			type: 'restaurant', // future feature, add food?
			opennow: 'true',
			key: process.env.placesAPIKey || keys.placesAPIKey
		}
	};

	////////////////////////////////////////
	// 1. ORIGINAL GOOGLE PLACES API CALL //
	////////////////////////////////////////

	request(options, function(err1, res1, body1) {
		if (err1) return err1;
		body1 = JSON.parse(body1);
		// console.log(body1);
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

		// Randomly choose 1 restaurant from that restaurants array
		let n = Math.floor((Math.random() * restaurantsArray.length));

		/////////////////////////////////////////////////////////////////////
		// 2. GOOGLE PLACES **DETAILS** API CALL FOR ONE RANDOM RESTAURANT //
		/////////////////////////////////////////////////////////////////////

		let options = {
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/details/json',
			qs: {
				placeid: restaurantsArray[n].placeId,
				key: process.env.placesAPIKey || keys.placesAPIKey
			}
		};

		chosenRestaurant = restaurantsArray[n];

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

			// Updates details about the restaurant in the array
			chosenRestaurant = {
				name: result.name,
				googleId: result.id,
				placeId: result.place_id,
				latitude: result.geometry.location.lat,
				longitude: result.geometry.location.lng,
				address: result.formatted_address,
				rating: result.rating,
				url: result.website
			};

			//////////////////////////////////////////////////////////////////////
			// 3. GOOGLE PLACES **PHOTOS** API CALL FOR SAME RANDOM RESTAURANT  //
			//////////////////////////////////////////////////////////////////////

			// Randomly choose 1 restaurant from that restaurants array
			let k = Math.floor((Math.random() * photosArray.length));

			photoInfo = {
				width: photosArray[k].width,
				photoref: photosArray[k].photoref
			};

			let imageUrl = 
				'https://maps.googleapis.com/maps/api/place/photo' +
				'?maxwidth=' + photosArray[k].width +
				'&photoreference=' + photosArray[k].photoref +
				'&key=' + ( process.env.placesAPIKey || keys.placesAPIKey );

			let serveUpRestaurantObject = {
				image: imageUrl,
				restaurant: chosenRestaurant,
				photo: photoInfo
			};

			/////////////////////////////////////////////////////////////////
			// 4. GOOGLE VISION API CALL TO DETERMINE HOTDOG OR NOT HOTDOG //
			/////////////////////////////////////////////////////////////////

			let options = {
				method: 'POST',
				url: 'https://vision.googleapis.com/v1/images:annotate',
				qs: {
					key: process.env.placesAPIKey || keys.placesAPIKey
				},
				body: {
					requests: [{
						image: {
							source: {
								imageUri: imageUrl
							}
						},
						features: [{
							type: 'LABEL_DETECTION', 
							maxResults: 5
						}]
					}]
				},
				json: true
			};

			request(options, function (error, response, body) {
			  if (error) throw new Error(error);

			  let visionArray = body.responses[0].labelAnnotations;
			  let visionDescriptions = [];
			  let isFood = false;

			  if (visionArray.length > 0) {
			  	for (let i = 0; i < visionArray.length; i ++) {

				  	let currentDescription = visionArray[i].description;
				  	visionDescriptions.push(currentDescription);

				  	if (currentDescription === 'food' || currentDescription === 'cuisine' || 
				  		currentDescription === 'dish' || currentDescription === 'meal' ||
				  		currentDescription === 'sandwich' || currentDescription === 'fast food' ||
				  		currentDescription === 'vegetarian food' || currentDescription === 'hamburger') {

				  		//set isFood boolean to true
				  		isFood = true;
				  	} 
				  }	
			  } 
			  
			  if (isFood === true) {
			  	console.log("serving up the food");
			  	console.log(visionDescriptions);
			  	// SERVE UP THE RESTAURANT AND ITS DETAILS TO THE FRONT END
					resMaster.json(serveUpRestaurantObject);
			  } else {
			  	console.log(imageUrl);
			  	console.log(visionDescriptions);
			  	//if it's not a food, call the function again!
			  	show(reqMaster, resMaster);
			  } 
			});		 
		});		
	});	
}

module.exports.show = show;