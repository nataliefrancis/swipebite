import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { isDevMode } from '@angular/core';

@Injectable()
export class LandingService {

	baseUrl : string;

	constructor( private http : Http) { 

		if(isDevMode()) {
			this.baseUrl = 'https://localhost:3000';
		} else {
			this.baseUrl = '';
		}

	}

	callGooglePlacesAPI (location) {
		console.log('at the landing service');
		console.log(location);
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(`${this.baseUrl}/api/places`, location, {headers: headers});
	}
}

///////////////////// GRAVEYARD ////////////////////////////////

// saveUser (newUser) {
// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
// }

// 	authenticateUser () {
// 	return this.http.get(`${this.baseUrl}/auth/google`);
// }

