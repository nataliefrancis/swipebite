const request = require('request');
const keys = require('./env');

let options = { 
	method: 'GET',
	url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
	qs: {
		location: '',
		radius: '500',
		type: 'restaurant', 
		opennow: 'true',
		key: process.env.clientSecret || keys.placesAPIKey
	}
};

request(options, function(err, res, body) {
	if (err) return err;
	console.log(body);
});

// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
//   qs: 
//    { location: '-33.8670522,151.1957362',
//      radius: '500',
//      type: 'restaurant',
//      keyword: 'cruise',
//      key: 'AIzaSyAJMHZULCN5jU2_pRHSTG456eZFm4VXJWw' },
//   headers: 
//    { 'postman-token': '268917b5-b456-89e8-81d5-32ff649d84d4',
//      'cache-control': 'no-cache' 
//    } 
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });
