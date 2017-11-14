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
  		// this.oneFood = response.json();
  		console.log('all the restaurants in the array:');
  		console.log(this.restaurants);
  		console.log('restaurantId after returning from the DB:' + restaurantId);
  		let restaurantIndex = this.restaurants.indexOf(restaurantId);
  		console.log('restaurant index: ' + restaurantIndex);
  		this.restaurants.splice(restaurantIndex, 1);  	
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
  	console.log('foodId at admin component:' + foodId);
  	this.apiService.destroyOneFood(foodId)
  	.subscribe(response => {
  		console.log(response.json());
  		// this.oneFood = response.json();
  		console.log('all the food in the array:');
  		console.log(this.foods);
  		console.log('foodId after returning from the DB:' + foodId);
  		let foodIndex = this.foods.indexOf(foodId);
  		console.log('food index: ' + foodIndex);
  		this.foods.splice(foodIndex, 1);  	
  	})
  }

  /*
	grabAllFoods(userId) {
  	console.log('grabbing all foods for user' + userId);

    this.apiService.indexFoods()
      .subscribe(response => {
        console.log(response.json());
        this.allFoods = response.json();
      })
  }

  deletesOneFood(foodId) {
  	console.log("I'm deleting food number:" + foodId);
  	this.apiService.destroyOneFood(foodId)
  		.subscribe(response => {
  			console.log(response.json());
  			let foodIndex = this.allFoods.indexOf(foodId);
  			this.allFoods.splice(foodIndex, 1);
  		})
  }
  */

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
  	console.log('userId at admin component:' + userId);
  	this.apiService.destroyOneUser(userId)
  	.subscribe(response => {
  		console.log(response.json());
  		// this.oneFood = response.json();
  		console.log('all the users in the array:');
  		console.log(this.users);
  		console.log('userId after returning from the DB:' + userId);
  		let userIndex = this.users.indexOf(userId);
  		console.log('user index: ' + userIndex);
  		this.users.splice(userIndex, 1);  	
  	})
  }

  // ROUTING FUNCTIONS //

  callsNextPage() {
  	this.router.navigate(['/']);
  }

}
