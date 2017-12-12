import { Injectable, isDevMode } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {

	baseUrl: string;

  constructor( private http: Http ) { 
  	if (isDevMode) {
      console.log("thinks we're in dev mode");
  		this.baseUrl  = 'http://localhost:3000';
  	} else {
      console.log("doesn't think we're in dev mode");
  		this.baseUrl = '';
  	}
  }

  //////////////////////////// AUTHENTICATION ROUTES ////////////////////////

  determineCurrentUser(){
    console.log(this.baseUrl);
    return this.http.get(`${this.baseUrl}/auth/currentUser`, {withCredentials: true});
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
    return this.http.put(`${this.baseUrl}/api/restaurants/${restaurant.id}`, restaurant);
  }

  destroyOneRestaurant(restaurantId) {
    return this.http.delete(`${this.baseUrl}/api/restaurants/${restaurantId}`);
  }

  /////////////////////////// FOOD ROUTES /////////////////////////////////

  indexFoods() {
    return this.http.get(`${this.baseUrl}/api/foods`);
  }

  createFood(food) {
    return this.http.post(`${this.baseUrl}/api/foods`, food);
  }

  showOneFood(foodId) {
    return this.http.get(`${this.baseUrl}/api/foods/${foodId}`);
  }

  updateFood(food) {
    return this.http.put(`${this.baseUrl}/api/foods/${food.id}`, food);
  }

  destroyOneFood(foodId) {
    return this.http.delete(`${this.baseUrl}/api/foods/${foodId}`);
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
    return this.http.put(`${this.baseUrl}/api/users/${user.id}`, user);
  }

  destroyOneUser(userId) {
    return this.http.delete(`${this.baseUrl}/api/users/${userId}`);
  }

  ////////////////////////////// OTHER ROUTES //////////////////////////////////

  showMostRecentFood() {
    console.log("hitting the show most recent food route on the api service");
    return this.http.get(`${this.baseUrl}/api/foods/restaurant`);
  }

  showUsersFavoriteFoods(userId) {
    console.log('api Service user id!');
    console.log(userId);
    return this.http.get(`${this.baseUrl}/api/foods/user/${userId}`);
  }
}
