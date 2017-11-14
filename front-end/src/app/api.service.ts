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

  /////////////////////////// API ROUTES /////////////////////////////////

  callGooglePlacesAPI(body) {
    // console.log('at the googlecallplaces function on api service');
    // console.log(body);
   	return this.http.post(`${this.baseUrl}/api/places`, body); 
  }

  /////////////////////////// RESTAURANT ROUTES ///////////////////////////////// 

  indexRestaurants() {
    return "you've hit the index restaurants route on the front end";
  }

  createRestaurant(body) {
    return this.http.post(`${this.baseUrl}/api/restaurants`, body);
  }

  showOneRestaurant(id) {
    return this.http.get(`${this.baseUrl}/api/restaurants/${id}`);
  }

  updateRestaurant() {
    return "you've hit the update restaurant route on the front end";
  }

  destroyOneRestaurant() {
    return "you've hit the destroy restaurant route on the front end";
  }

  /////////////////////////// FOOD ROUTES /////////////////////////////////

  indexFoods() {
    return this.http.get(`${this.baseUrl}/api/foods`);
  }

  createFood(body) {
    return this.http.post(`${this.baseUrl}/api/foods`, body);
  }

  showFood(id) {
    console.log(id);
    return this.http.get(`${this.baseUrl}/api/foods/${id}`);
  }

  updateFood() {
    return "you've hit the update food route on the front end";
  }

  destroyOneFood(foodId) {
    return this.http.get(`${this.baseUrl}/api/foods/${foodId}`);
  }
}
