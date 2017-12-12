import { Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	
	isCollapsed: boolean;
	coordinates: any;
 	restaurant;
 	newFood;
 	currentUser;
  baseUrl: string;

  constructor(private router: Router, private apiService : ApiService) {
    this.isCollapsed = true;
  }
  		
  ngOnInit() {
    console.log("hitting SOMETHING on the main.component.ts page");

    // SETS THE BASE URL
    if(isDevMode()) {
      this.baseUrl = "http://localhost:3000";
    } else {
      this.baseUrl = "";
    }

  	// as soon as this page loads, grab the user's lat and long, and call the Google Places API
		window.navigator.geolocation.getCurrentPosition(position => {
			this.coordinates = {
		  	latitude: position.coords.latitude,
		  	longitude: position.coords.longitude
			}
      console.log(this.coordinates);
			this.callGooglePlacesAPI();
		});	

		this.determineCurrentUser();
  }

  // Gets Restaurant and Photo from Google Places API
  callGooglePlacesAPI() {
    console.log("hitting google places api on main.component.ts");
    let apiObject = {
      coordinates: this.coordinates,
      user: this.currentUser
    }
    console.log(apiObject);
		this.apiService.callGooglePlacesAPI(apiObject)
	    .subscribe(response => {
      console.log(response.json());
	    this.restaurant = response.json();
	 	});
	}	

  swipeLeft() {
  	// calls the function to serve up the next image
  	this.callGooglePlacesAPI();
  }

  swipeRight() {
  	// saves Restaurant in the DB, and saves food with a restaurantId
    console.log("this is the restaurant we're sending to the DB");
    console.log(this.restaurant);
  	this.apiService.createRestaurant(this.restaurant)
			.subscribe(response => { 
        console.log("this is the restaurant that we saved to the database");
        //console.log(response.json());

        let foodId = response.json().id;
        console.log(foodId);
        this.router.navigate(['/matched', foodId]);
      // saves Restaurant in the DB, and saves food with a restaurantId
      //this.apiService.createRestaurant(this.restaurant)
            //.subscribe(response => {
              // let foodId = response.json().id;
               // this.router.navigate(['/matched/' +foodId]);
    });
  }
      
	/*
  ORIGINAL STUFF
  swipeRight() {
    // creates Restaurant in the DB
    this.apiService.createRestaurant(this.restaurant)
      .subscribe(res1 => { 
        let response = res1.json();
        console.log(response);
        this.router.navigate(['/matched']);
        console.log(this.restaurant);

        // creates Food in the DB AFTER Restaurant is created
        this.apiService.createFood(this.restaurant)
          .subscribe(res2 => {
            console.log(res2.json());
            this.router.navigate(['/matched']);
          })
      });
  }*/

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
  	this.router.navigate(['/matched']);
  }

  callsSettings() {
    this.router.navigate(['/settings']);
  }

}
