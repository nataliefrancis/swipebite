import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginButtonService {

	baseUrl = 'http://localhost:3000';

	authenticateUser () {
		// return this.http.get(`${this.baseUrl}/auth/google`);
		console.log("Hitting the login button");
	}

	// saveUser (newUser) {
	// 	return this.http.post(`${this.baseUrl}/auth/google`, newUser);
	// }

  constructor( private http : Http) { }

}
