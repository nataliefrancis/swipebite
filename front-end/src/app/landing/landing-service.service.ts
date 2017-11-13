import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

	callGooglePlacesAPI (body) {
		console.log('at the landing service');
		// location = JSON.stringify(location);
		console.log(body);
		console.log(typeof(body));
		// let headers = new Headers();
		// headers.append('Content-Type', 'application/json');
		// console.log('these are the headers: ');
		// console.log(headers);
		return this.http.post(`${this.baseUrl}/api/places`, body); //, {headers: headers});
	}
}

///////////////////// GRAVEYARD ////////////////////////////////

// saveUser (newUser) {
// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
// }

// 	authenticateUser () {
// 	return this.http.get(`${this.baseUrl}/auth/google`);
// }

