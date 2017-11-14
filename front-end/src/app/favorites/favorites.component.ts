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
	allFoods;
  currentUser;

  constructor( private router: Router, private apiService: ApiService ) { }

  ngOnInit() {
    let currentUser = this.determineCurrentUser();
    this.grabAllFoods(currentUser);
  }

  // DETERMINES WHICH USER IS CURRENTLY LOGGED IN
  determineCurrentUser() {
    //console.log('hitting determineCurrentUser function');
    this.apiService.determineCurrentUser()
    .subscribe(response => {
      //console.log(response.json());
      this.currentUser = response.json();
    })
  }

  //TODO: make it so that this function ONLY grabs foods with a specific user id
  grabAllFoods(userId) {
    console.log()
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

  callsNextPage() {
  	this.router.navigate(['/settings']);
  }

}
