import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {

  oneFood;
  restaurant: {};
  currentUser;

  constructor( 
    private router: Router, 
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  // TODO: shouldn't actually use the food id directly but should look up the restaurantId based on the foodId and then use that to return the restaurant from the DB
  /*grabRestaurant() {
    // this.grabOneFood();
    this.grabRestaurant();
    this.determineCurrentUser();
  }

  grabRestaurant() {
    console.log('trying to grab a restaurant address');
    this.route.params.forEach( param => {
      this.apiService.showOneRestaurant(param.id)
        .subscribe(response => {
          console.log(response.json());
          this.restaurant = response.json();
        })
    })
   
  }

  // grabOneFood() {
  //   console.log("attempting to grab the food picture");
  //   this.route.params.forEach( param => {
  //     this.apiService.showOneFood(param.id)
  //       .subscribe(response => {
  //         console.log(response.json());
  //         this.oneFood = response.json();
  //       })
  //   })
    
  // }

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
