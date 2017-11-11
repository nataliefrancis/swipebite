import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainFoodService {

	baseUrl = 'http://localhost:3000';

	getUser() {
		return this.http.get(`${this.baseUrl}/profile`)
	}

  constructor(private http: Http) { }

}
