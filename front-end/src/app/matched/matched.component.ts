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
  id: number = 2;

  constructor( private router: Router, private apiService: ApiService ) { }

  ngOnInit() {
    this.grabOneFood();
    this.grabRestaurantAddress();
  }

  // TODO: shouldn't actually use the food id directly but should look up the restaurantId based on the foodId and then use that to return the restaurant from the DB
  grabRestaurantAddress() {
    console.log('trying to grab a restaurant address');
    this.apiService.showRestaurantAddress(this.id)
      .subscribe(response => {
        console.log(response.json());
        this.restaurant = response.json();
      })
  }

  grabOneFood() {
    this.apiService.showFood(this.id)
      .subscribe(response => {
        console.log(response.json());
        this.oneFood = response.json();
      })

    //TODO: change wasSeen boolean from false to true (will count as a Food update route)
  }

  callsNextPage() {
  	this.router.navigate(['/favorites']);
  }

  callsPreviousPage() {
  	this.router.navigate(['/main']);
  }

}
