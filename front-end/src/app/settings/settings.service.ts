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

	// updateArtist(updatedArtist) {
	// 	return this.http.put(`${this.baseUrl}/api/artists/${updatedArtist.id}`, updatedArtist);		
	// }
  constructor(private http: Http) { }

}