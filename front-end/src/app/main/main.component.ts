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
 	oneFood;

  constructor(private router: Router, private apiService : ApiService) { }

  ngOnInit() {
		this.callGooglePlacesAPI();
		console.log('hit ng on init');
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
			    this.oneFood = response.json();
			    // this.router.navigate(['/main', { response } ]); 
			 });
			});
		}	

  swipeLeft() {
  	console.log('swiping left');
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
