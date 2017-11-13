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

	callGooglePlacesAPI () {
		return this.http.get(`${this.baseUrl}/api/places`);
	}
}

///////////////////// GRAVEYARD ////////////////////////////////

// saveUser (newUser) {
// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
// }

// 	authenticateUser () {
// 	return this.http.get(`${this.baseUrl}/auth/google`);
// }

