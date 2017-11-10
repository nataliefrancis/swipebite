import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LandingService {

	baseUrl = 'http://localhost:3000';

	constructor( private http : Http) { }

	authenticateUser () {
		return this.http.get(`${this.baseUrl}/auth/google`);
	}

	// saveUser (newUser) {
	// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
	// }

 

}