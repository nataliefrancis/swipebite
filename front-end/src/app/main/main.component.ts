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

  constructor(private router: Router, private apiService : ApiService) {
  	this.isCollapsed = true;
  }
  		

  ngOnInit() {

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
  	// creates Restaurant in the DB
  	this.apiService.createRestaurant(this.restaurant)
			.subscribe(res1 => { 
				let response = res1.json();
				// console.log(response);
				let newFood = {
					photoUrl: this.restaurant.image,
					restaurantId: response.id
				}
				this.router.navigate(['/matched']);
				// console.log(this.restaurant);

				// creates Food in the DB AFTER Restaurant is created
				this.apiService.createFood(newFood)
					.subscribe(res2 => {
						console.log(res2.json());
            this.router.navigate(['/matched']);
					})
					console.log(newFood);
			});
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

  callsNextPage() {
  	this.router.navigate(['/matched']);
  }

  callsSettings() {
    this.router.navigate(['/settings']);
  }

}
