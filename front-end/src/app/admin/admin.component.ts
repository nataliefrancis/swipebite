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

  showOneRestaurant(restaurantId) {
  	this.apiService.showOneRestaurant(restaurantId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneRestaurant = response.json();
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

  }

  showOneFood(foodId) {
  	this.apiService.showOneFood(foodId)
  	.subscribe(response => {
  		// console.log(response.json());
  		this.oneFood = response.json();
  		console.log(this.oneFood.id);
  		console.log(this.oneFood.photoUrl);
  	})
  }

  editOneFood(food) {
  	this.apiService.updateFood(food)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneFood = response.json();
  	})
  }

  deleteOneFood(foodId) {
  	console.log(foodId);
  	this.apiService.destroyOneFood(foodId)
  	.subscribe(response => {
  		console.log(response.json());
  		console.log(this.foods);
  		console.log(foodId);
  		let foodIndex = this.foods.indexOf(foodId);
  		console.log(foodIndex);
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

  showOneUser(userId) {
  	this.apiService.showOneUser(userId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneUser = response.json();
  	})
  }

  // ROUTING FUNCTIONS //

  callsNextPage() {
  	this.router.navigate(['/']);
  }

}
