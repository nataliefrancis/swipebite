import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginButtonService {

	baseUrl = 'http://localhost:3000';

	getUser () {
		return this.http.get(`${this.baseUrl}/auth/google`);
	}

	saveUser (newUser) {
		return this.http.post(`${this.baseUrl}/auth/google`, newUser);
	}

  constructor( private http : Http) { }

}
