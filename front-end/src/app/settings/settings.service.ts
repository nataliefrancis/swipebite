import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SettingsService {

	baseUrl = 'http://localhost:4200';

	getZipcode() {
		return this.http.get(`${this.baseUrl}/`);
	}

	saveZipcode(newZipcode) {
		console.log(newZipcode);
		return this.http.post(`${this.baseUrl}/`, newZipcode);
	}

	getImage(imageUrl: string) {
        return this.http.get(imageUrl);
    }
  constructor(private http: Http) { }

}