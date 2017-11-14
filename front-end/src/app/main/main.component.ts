import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	coordinates : any;
 	restaurant;

  constructor(private router: Router, private apiService : ApiService) { }

  ngOnInit() {
  	
  		// TODO: only call the geolocation once when the page loads so each api call doesn't take so long
			// }).toPromise()
  	// 	  .then(
  		//this.coordinates = 
  		window.navigator.geolocation.getCurrentPosition(position => {
				this.coordinates = {
			  	latitude: position.coords.latitude,
			  	longitude: position.coords.longitude
				}
				this.callGooglePlacesAPI();
			});	
  }

  // FINDS THE USER’S LOCATION FROM THE BROWSER WINDOW
	// AND SEND IT TO GOOGLE PLACES API
  callGooglePlacesAPI() {
  	console.log('ARE THESE STILL THE RIGHT COORDINATES?');
  	console.log(this.coordinates);
		this.apiService.callGooglePlacesAPI(this.coordinates)
	    .subscribe(response => {
	    // console.log('callGooglePlacesAPI function: ');
	    // console.log(response.json());
	    this.restaurant = response.json();
	 	});
	}	

  swipeLeft() {
  	// calls the function to serve up the next image
  	this.callGooglePlacesAPI();
  }

  swipeRight() {
  	// create Restaurant in the DB
  	this.apiService.createRestaurant(this.restaurant)
			.subscribe(res1 => {
				console.log(res1.json());
				this.router.navigate(['/matched']);

				//after the restaurant has been created, creates Food in the DB
				//this.apiService.createFood(this.restaurant)
					// .subscribe(res2 => {
					// 	console.log(res2.body);
					// })
			});

  	// TODO: saves the current food image to the database also
  }

  callsNextPage() {
  	this.router.navigate(['/matched']);
  }

}
