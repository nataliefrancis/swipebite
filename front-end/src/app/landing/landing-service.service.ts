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

	authenticateUser () {
		return this.http.get(`${this.baseUrl}/auth/google`);
	}

	callGooglePlacesAPI () {
		return this.http.get(`${this.baseUrl}/api/places`);
	}

	// saveUser (newUser) {
	// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
	// }

 

}