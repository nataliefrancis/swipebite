import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {

  oneFood;
  restaurant: {};
  //TODO: figure out how to make this number dynamic and correspond to the one you JUST crudded to the database
  id: number;
  currentUser;

  constructor( private router: Router, private apiService: ApiService ) { }

  ngOnInit() {
    this.grabMostRecentFood(this.id);
    this.determineCurrentUser();
  }

  grabMostRecentFood(id) {
    console.log('trying to grab the food that was saved to the database most recently');
    console.log(id);
    this.apiService.showOneRestaurant(id)
    .subscribe(response => {
        console.log("here's the most recent restaurant and food we served up from the back end");
        console.log(response.json());
        this.restaurant = response.json();
      })
  }

  // TODO: shouldn't actually use the food id directly but should look up the restaurantId based on the foodId and then use that to return the restaurant from the DB
  /*grabRestaurant() {
    console.log('trying to grab a restaurant address');
    this.apiService.showOneRestaurant(this.id)
      .subscribe(response => {
        console.log(response.json());
        this.restaurant = response.json();
      })
  }

  grabOneFood() {
    this.apiService.showOneFood(this.id)
      .subscribe(response => {
        console.log(response.json());
        this.oneFood = response.json();
      })
  }*/

  // DETERMINES WHICH USER IS CURRENTLY LOGGED IN
  determineCurrentUser() {
    this.apiService.determineCurrentUser()
    .subscribe(response => {
      this.currentUser = response.json();
    })
  }

  callsNextPage() {
  	this.router.navigate(['/favorites']);
  }

  callsPreviousPage() {
  	this.router.navigate(['/main']);
  }

}
