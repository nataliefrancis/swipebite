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

  	// as soon as this page loads, grab the user's lat and long, and call the Google Places API
		window.navigator.geolocation.getCurrentPosition(position => {
			this.coordinates = {
		  	latitude: position.coords.latitude,
		  	longitude: position.coords.longitude
			}
			this.callGooglePlacesAPI();
		});	
  }

  // Gets Restaurant and Photo from Google Places API
  callGooglePlacesAPI() {
		this.apiService.callGooglePlacesAPI(this.coordinates)
	    .subscribe(response => {
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
				this.router.navigate(['/matched', this.restaurant]);

				// TODO: saves the current food image to the database also
				//after the restaurant has been created, creates Food in the DB
				//this.apiService.createFood(this.restaurant)
					// .subscribe(res2 => {
					// 	console.log(res2.body);
					// })
			});

  }

  callsNextPage() {
  	this.router.navigate(['/matched']);
  }

}
