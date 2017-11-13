import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { isDevMode } from '@angular/core';

@Injectable()
export class LandingService {

	baseUrl : string;

	constructor( private http : Http) { 

		if(isDevMode()) {
			this.baseUrl = 'http://localhost:3000';
		} else {
			this.baseUrl = '';
		}

	}

	callGooglePlacesAPI (location) {
		console.log('at the landing service');
		console.log(location);
		return this.http.post(`${this.baseUrl}/api/places`, location);
	}
}

///////////////////// GRAVEYARD ////////////////////////////////

// saveUser (newUser) {
// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
// }

// 	authenticateUser () {
// 	return this.http.get(`${this.baseUrl}/auth/google`);
// }

