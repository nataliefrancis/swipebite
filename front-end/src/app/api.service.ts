import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

	baseUrl: string;

  constructor( private http: Http ) { 
  	
  	if (isDevMode) {
  		this.baseUrl  = 'http://localhost:3000';
  	} else {
  		this.baseUrl = '';
  	}

  }


  callGooglePlacesAPI (body) {
    console.log('at the landing service');
    console.log(body);
    console.log(typeof(body));
   	return this.http.post(`${this.baseUrl}/api/places`, body); //, {headers: headers});
  }

}
