import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	foods = [];
	oneFood;
	createFoodBoolean = false;
	restaurants = [];
	oneRestaurant;
	createRestaurantBoolean = false;
	users = [];
	oneUser;
	createUserBoolean = false;
  currentUser;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.determineCurrentUser();
  }

  // DETERMINES WHICH USER IS CURRENTLY LOGGED IN
  determineCurrentUser() {
    console.log('hitting determineCurrentUser function');
    this.apiService.determineCurrentUser()
    .subscribe(response => {
      console.log(response.json());
      this.currentUser = response.json();
    })
  }

  // RESTAURANT CALLS //

  grabsAllRestaurants() {
  	this.apiService.indexRestaurants()
  	.subscribe(response => {
  		console.log(response.json());
  		this.restaurants = response.json();
  	})
  }

  showRestaurantForm() {
  	this.createRestaurantBoolean = true;
  	console.log(this.createRestaurantBoolean);
  }

  createRestaurant(restaurant) {
  	console.log('creating restaurant');
  	console.log(restaurant);
  }

  showOneRestaurant(restaurantId) {
  	this.apiService.showOneRestaurant(restaurantId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneRestaurant = response.json();
  	})
  }

  editOneRestaurant(restaurant) {
  	this.apiService.updateRestaurant(restaurant)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneRestaurant = response.json();
  	})
  }

  deleteOneRestaurant(restaurantId) {
  	console.log('restaurantId at admin component:' + restaurantId);
  	this.apiService.destroyOneRestaurant(restaurantId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.restaurants[restaurantId-1] = null;	
  	})
  }

  // FOOD CALLS //

  grabsAllFoods() {
  	this.apiService.indexFoods()
  	.subscribe(response => {
  		// console.log(response.json());
  		this.foods = response.json();
  	})
  }

  showFoodForm() {
  	this.createFoodBoolean = true;
  	console.log(this.createFoodBoolean);
  }

  createFood() {
  	console.log('creating food');
  	//need to create this route!
  }

  showOneFood(foodId) {
  	this.apiService.showOneFood(foodId)
  	.subscribe(response => {
  		this.oneFood = response.json();
  	})
  }

  editOneFood(food) {
  	console.log("this is the food we're sending to the backend");
  	console.log(food);
  	this.apiService.updateFood(food)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneFood = response.json();
  	})
  }

  deleteOneFood(foodId) {
  	this.apiService.destroyOneFood(foodId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.foods[foodId-1] = null;	
  	})
  }

  // USER CALLS //

  grabsAllUsers() {
  	this.apiService.indexUsers()
  	.subscribe(response => {
  		console.log(response.json());
  		this.users = response.json();
  	})
  }

  showUserForm() {
  	this.createUserBoolean = true;
  	console.log(this.createUserBoolean);
  }

  createUser() {
  	console.log('creating user');
  	//need to create this route!
  }

  showOneUser(userId) {
  	this.apiService.showOneUser(userId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneUser = response.json();
  	})
  }

  editOneUser(user) {
  	this.apiService.updateUser(user)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneUser = response.json();
  	})
  }

  deleteOneUser(userId) {
  	this.apiService.destroyOneUser(userId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.users[userId-1] = null;	
  	})
  }

  // ROUTING FUNCTIONS //

  callsNextPage() {
  	this.router.navigate(['/']);
  }

}
