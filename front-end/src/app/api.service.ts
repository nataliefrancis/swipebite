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
    // console.log('at the googlecallplaces function on api service');
    // console.log(body);
   	return this.http.post(`${this.baseUrl}/api/places`, body); 
  }

  createRestaurant(body) {
    return this.http.post(`${this.baseUrl}/api/restaurants`, body);
  }

  createFood(body) {
    return this.http.post(`${this.baseUrl}/api/foods`, body);
  }

  showFood(id) {
    console.log(id);
    return this.http.get(`${this.baseUrl}/api/foods/${id}`);
  }

  showRestaurantAddress(id) {
    return this.http.get(`${this.baseUrl}/api/restaurants/${id}`);
  }

  indexFoods() {
    return this.http.get(`${this.baseUrl}/api/foods`);
  }

  destroyOneFood(foodId) {
    return this.http.get(`${this.baseUrl}/api/foods/${foodId}`);
  }

}
