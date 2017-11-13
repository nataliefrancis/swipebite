// const firebase = require('firebase');
// const keys = require('../config/env');

// function login(req, res) {
// 	console.log('hitting the login controller');
// 	let config = {
// 	  apiKey: process.env.clientSecret || keys.firebaseAPIKey,
// 	  // authDomain: "swipebite-185605.firebaseapp.com",
// 	  databaseURL: "https://swipebite-185605.firebaseio.com/",
// 	  storageBucket: "gs://swipebite-185605.appspot.com"
// 	};

// 	console.log(config);

// 	// this call doesn't appear to be working!
// 	firebase.initializeApp(config);

	/**
	 * initApp handles setting up the Firebase context and registering
	 * callbacks for the auth status.
	 *
	 * The core initialization is in firebase.App - this is the glue class
	 * which stores configuration. We provide an app name here to allow
	 * distinguishing multiple app instances.
	 *
	 * This method also registers a listener with firebase.auth().onAuthStateChanged.
	 * This listener is called when the user is signed in or out, and that
	 * is where we update the UI.
	 *
	 * When signed in, we also authenticate to the Firebase Realtime Database.
	 */

  // Listen for auth state changes.
//   firebase.auth().onAuthStateChanged(function(user) {
// 	    console.log('User state change detected from the Background script of the Chrome Extension:', user);
// 	});
// }

/*
FROM DOG CHECK IN:

// from front-end/src/app/login/login.component.ts:  
.then(res) => {
 		this.userInfo = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]])
 		let newUser = res.additionalUserInfo;
 		let firebaseId = this.userInfo.uid;
 		console.log(newUser);
 		let userObject = {
 			firebase_id: firebaseId,
 			name: newUser.profile.name,
 			email: newUser.profile.email,
 			image: newUser.profile.picture
 		}
 		if(newUser.isNewUser) {
 			this.apiService.createUser(userObject)
 			.subscribe(res => {
 				console.log(res.json());
 			})
 		}
 		this.router.navigateByUrl('/map')
 	})
 	.catch((err) => console.log(err));
 }



*/

// module.exports.login = login;