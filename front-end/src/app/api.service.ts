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

  callGooglePlacesAPI(body) {
    // console.log('at the api service');
    // console.log(body);
   	return this.http.post(`${this.baseUrl}/api/places`, body); 
  }

  createRestaurant(body) {
    // console.log('at the createRestaurant function on api service: ');
    // console.log(body);
    return this.http.post(`${this.baseUrl}/api/restaurants`, body);
  }

  createFood(body) {
    console.log('hitting the createFood function: ');
    console.log(body);
  }

}
