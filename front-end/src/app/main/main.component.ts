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
		this.callGooglePlacesAPI();
  }

  // FINDS THE USER’S LOCATION FROM THE BROWSER WINDOW
	// AND SEND IT TO GOOGLE PLACES API
  callGooglePlacesAPI() {
			window.navigator.geolocation.getCurrentPosition(position => {
				this.coordinates = {
			  	latitude: position.coords.latitude,
			  	longitude: position.coords.longitude
				}

				this.apiService.callGooglePlacesAPI(this.coordinates)
			    .subscribe(response => {
			    console.log(response.json());
			    this.restaurant = response.json();
			 });
			});
		}	

  swipeLeft() {
  	this.callGooglePlacesAPI()
  }

  swipeRight() {
  	console.log('swiping right');
  	this.callGooglePlacesAPI()
  }

  callsNextPage() {
  	this.router.navigate(['/matched']);
  }

}
