import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	
	isCollapsed: boolean;
	coordinates : any;
 	restaurant;
 	newFood;
 	currentUser;

  constructor(private router: Router, private apiService : ApiService) {}
  		
  ngOnInit() {

    this.isCollapsed = true;

  	// as soon as this page loads, grab the user's lat and long, and call the Google Places API
		window.navigator.geolocation.getCurrentPosition(position => {
			this.coordinates = {
		  	latitude: position.coords.latitude,
		  	longitude: position.coords.longitude
			}
			this.callGooglePlacesAPI();
		});	

		this.determineCurrentUser();
  }

  // Gets Restaurant and Photo from Google Places API
  callGooglePlacesAPI() {
    let apiObject = {
      coordinates: this.coordinates,
      user: this.currentUser
    }
		this.apiService.callGooglePlacesAPI(apiObject)
	    .subscribe(response => {
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
