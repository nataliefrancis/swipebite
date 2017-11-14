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
	restaurants;
	users;

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

  // FOOD CALLS //

  grabsAllFoods() {
  	this.apiService.indexFoods()
  	.subscribe(response => {
  		console.log(response.json());
  		this.foods = response.json();
  	})
  }

  showOneFood(foodId) {
  	this.apiService.showOneFood(foodId)
  	.subscribe(response => {
  		console.log(response.json());
  		this.oneFood = response.json();
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
  		let foodIndex = this.foods.indexOf(foodId);
  		this.foods.splice(foodIndex, 1);  	
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

  // ROUTING FUNCTIONS //

  callsNextPage() {
  	this.router.navigate(['/']);
  }

}
