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
	restaurants = [];
	oneRestaurant;
	users= [];
	oneUser;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  // RESTAURANT CALLS //

  grabsAllRestaurants() {
  	this.apiService.indexRestaurants()
  	.subscribe(response => {
  		console.log(response.json());
  		this.restaurants = response.json();
  	})
  }

  createRestaurant() {
  	//need to create this route!
  }

  showOneRestaurant(restaurantId) {
  	this.apiService.showOneRestaurant(restaurantId)
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

  createFood() {
  	//need to create this route!
  }

  showOneFood(foodId) {
  	this.apiService.showOneFood(foodId)
  	.subscribe(response => {
  		this.oneFood = response.json();
  	})
  }

  editOneFood(food) {
  	console.log("this is what we're sending to the backend" + food);
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

  createUser() {
  	//need to create this route!
  }

  showOneUser(userId) {
  	this.apiService.showOneUser(userId)
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
