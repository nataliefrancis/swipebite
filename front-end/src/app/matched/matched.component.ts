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
  //TODO: figure out how to make this number dynamic and correspond to the one you JUST crudded to the database
  currentUser;
  // id;

  constructor( 
    private router: Router, 
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.grabOneFood();
    this.grabRestaurant();
    this.determineCurrentUser();
  }

  // TODO: shouldn't actually use the food id directly but should look up the restaurantId based on the foodId and then use that to return the restaurant from the DB
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
    //console.log('hitting determineCurrentUser function');
    this.apiService.determineCurrentUser()
    .subscribe(response => {
      //console.log(response.json());
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
