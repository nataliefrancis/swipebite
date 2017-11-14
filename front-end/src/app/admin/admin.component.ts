import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	food;
	restaurant;
	user;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  grabsAllRestaurants() {
  	this.apiService.indexRestaurants()
  	.subscribe(response => {
  		console.log(response.json());
  		this.restaurant = response.json();
  	})
  }

  grabsAllFoods() {
  	this.apiService.indexFoods()
  	.subscribe(response => {
  		console.log(response.json());
  		this.food = response.json();
  	})
  }

  grabsAllUsers() {
  	//indexUsers
  }

  callsNextPage() {
  	this.router.navigate(['/']);
  }

}
