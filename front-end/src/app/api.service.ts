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

  createRestaurant(restaurant) {
    return this.http.post(`${this.baseUrl}/api/restaurants`, restaurant);
  }

  showOneRestaurant(restaurantId) {
    return this.http.get(`${this.baseUrl}/api/restaurants/${restaurantId}`);
  }

  updateRestaurant(restaurant) {
    return this.http.get(`${this.baseUrl}/api/restaurants/${restaurant.id}`, restaurant);
  }

  destroyOneRestaurant(restaurantId) {
    return this.http.get(`${this.baseUrl}/api/restaurants/${restaurantId}`);
  }

  /////////////////////////// FOOD ROUTES /////////////////////////////////

  indexFoods() {
    return this.http.get(`${this.baseUrl}/api/foods`);
  }

  createFood(food) {
    return this.http.post(`${this.baseUrl}/api/foods`, food);
  }

  showOneFood(foodId) {
    console.log('this is the foodid at apiservice:' + foodId);
    return this.http.get(`${this.baseUrl}/api/foods/${foodId}`);
  }

  updateFood(food) {
    return this.http.get(`${this.baseUrl}/api/foods/${food.id}`, food);
  }

  destroyOneFood(foodId) {
    console.log("hitting the api service at destroy: " +foodId);
    return this.http.get(`${this.baseUrl}/api/foods/${foodId}`);
  }

  ////////////////////////////// USER ROUTES //////////////////////////////////

  indexUsers() {
    return this.http.get(`${this.baseUrl}/api/users`);
  }

  createUser(user) {
    return this.http.post(`${this.baseUrl}/api/users`, user);
  }

  showOneUser(userId) {
    return this.http.get(`${this.baseUrl}/api/users/${userId}`);
  }

  updateUser(user) {
    return this.http.get(`${this.baseUrl}/api/users/${user.id}`, user);
  }

  destroyOneUser(userId) {
    return this.http.get(`${this.baseUrl}/api/users/${userId}`);
  }
}
