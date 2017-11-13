const firebase = require('firebase');
const keys = require('../config/env');

function login(req, res) {
	console.log('hitting the login controller');
	let config = {
	  apiKey: process.env.clientSecret || keys.firebaseAPIKey,
	  authDomain: "swipebite-185605.firebaseapp.com",
	  databaseURL: "https://swipebite-185605.firebaseio.com/",
	  storageBucket: "gs://swipebite-185605.appspot.com"
	};

	console.log(config);

	// this call doesn't appear to be working!
	firebase.initializeApp(config);

	// START HERE WHEN YOU GET BACK:
	//https://github.com/firebase/quickstart-js/blob/master/auth/chromextension/background.js
}

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

// front-end/src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
	private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
		this.user = _firebaseAuth.authState;

		this.user.subscribe(
  		(user) => {
  			if (user) {
  				this.userDetails = user;
  				console.log(this.userDetails);
  			}
  			else {
  			  	this.userDetails = null;
         		}
      	}
    	  );
    }

signInWithGoogle() {
	return this._firebaseAuth.auth.signInWithPopup(
		new firebase.auth.GoogleAuthProvider()
		)
}

  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/login']));
  }
}

*/

module.exports.login = login;