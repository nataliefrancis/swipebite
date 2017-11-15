import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

	userId: number = 1;
	favoriteFoods = [];
  currentUser;

  constructor( private router: Router, private apiService: ApiService ) { }

  ngOnInit() {
 
    this.determineCurrentUser();


  }

  // DETERMINES WHICH USER IS CURRENTLY LOGGED IN
  determineCurrentUser() {
    //console.log('hitting determineCurrentUser function');
    this.apiService.determineCurrentUser()
    .subscribe(response => {
      //console.log(response.json());
      this.currentUser = response.json();

      // as soon as you figure out who the user is, get their foods
      this.grabAllFoods(this.currentUser);
    })
  }

  //TODO: make it so that this function ONLY grabs foods with a specific user id
  grabAllFoods(user) {
    console.log('user id on the favorites component:');
    console.log(user.id);
    this.apiService.indexRestaurants()
      .subscribe(response => {
        console.log(response.json());
        this.favoriteFoods = response.json();
      })
  }

  deletesOneFood(foodId) {
  	console.log("I'm deleting food number:" + foodId);
  	this.apiService.destroyOneFood(foodId)
  		.subscribe(response => {
  			console.log(response.json());
  			let foodIndex = this.favoriteFoods.indexOf(foodId);
  			this.favoriteFoods.splice(foodIndex, 1);
  		})
  }

  callsNextPage() {
  	this.router.navigate(['web']);

  }

}
