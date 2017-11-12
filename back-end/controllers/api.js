const db = require('../models');
const request = require('request');
const requestPromise = require('request-promise');
const keys = require('../config/env');


function index(req, res) {
	console.log('here lies req.user.name: ');
	console.log(req.user.name);

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

	request(options, function(err, res, body) {
		if (err) return err;
		body = JSON.parse(body);
		let restaurantsArray = [];



		for (let i = 0; i < body.results.length; i++) {
			let results = body.results[i];

			let photoReferenceAPI = '';
			let widthAPI = '';

			if (body.results[i].photos[0].photo_reference && body.results[i].photos[0].width) {
				photoReferenceAPI = body.results[i].photos[0].photo_reference;
				widthAPI = body.results[i].photos[0].width;
			} else {
				photoReferenceAPI = 'no photo reference';
				widthAPI = 'no photo width';
			}

			let restaurantObject = {
				name: results.name,
				googleId: results.id,
				placeId: results.place_id,
				latitude: results.geometry.location.lat,
				longitude: results.geometry.location.lng,
				rating: results.rating,
				photos: { 
					photoReference: photoReferenceAPI,
					width: widthAPI
				}

				// TODO: need to change to a loop to get ALL photos instead of the first one
				//photosArray = []
					// for (let j = 0; j < results.photos.length; j++) {
					// 	console.log(results.photos[j]);
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
			};

			restaurantsArray.push(restaurantObject);
		}

		//console.log(restaurantsArray.length);
		//console.log(restaurantsArray);

		console.log(restaurantsArray[0]);
		console.log('for photo details API call: ');
		//console.log(restaurantsArray[0].photos.width);
		//console.log(restaurantsArray[0].photos.photoReference);

		// calls 2nd API request but only AFTER the first is finished
		let options = { 
			method: 'GET',
			url: 'https://maps.googleapis.com/maps/api/place/photo',
			qs: { 
				maxwidth: restaurantsArray[0].photos.width,
				photoreference: restaurantsArray[0].photos.photoReference, 
				key: process.env.clientSecret || keys.placesAPIKey
			}
		};

		request(options, function(err, res, body) {
			if (err) return err;

			console.log(body);
		});

	});
}

module.exports.index = index;