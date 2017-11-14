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
    return this.http.get(`${this.baseUrl}/api/restaurants`);
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

  showOneFood(id) {
    console.log(id);
    return this.http.get(`${this.baseUrl}/api/foods/${id}`);
  }

  updateFood() {
    return "you've hit the update food route on the front end";
  }

  destroyOneFood(foodId) {
    return this.http.get(`${this.baseUrl}/api/foods/${foodId}`);
  }

  ////////////////////////////// USER ROUTES //////////////////////////////////

  indexUsers() {
    return "you've hit the index users route on the front end";
  }

  createUser() {
    return "you've hit the create users route on the front end";
  }

  showOneUser() {
    return "you've hit the show users route on the front end";
  }

  updateUser() {
    return "you've hit the update users route on the front end";
  }

  destroyOneUser() {
    return "you've hit the destroy users route on the front end";
  }
}
