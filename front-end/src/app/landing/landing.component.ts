import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	baseUrl : string;
 	coordinates : any;
 	oneFood;

  constructor(private router: Router, private apiService : ApiService) { }

  ngOnInit() {
  	 // SETS THE BASE URL
	   if(isDevMode()) {
	     this.baseUrl = "http://localhost:3000";
	   } else {
	     this.baseUrl = "";
	   }
  }

	// FINDS THE USER’S LOCATION FROM THE BROWSER WINDOW
	// AND SEND IT TO GOOGLE PLACES API
	callGooglePlacesAPI(router) {
	 window.navigator.geolocation.getCurrentPosition(position => {
	   this.coordinates = {
	     latitude: position.coords.latitude,
	     longitude: position.coords.longitude
	   }

	   this.apiService.callGooglePlacesAPI(this.coordinates)
	     .subscribe(response => {
	     console.log(response.json());
	     this.oneFood = response.json();
	     // console.log(typeof(this.oneFood));
	     // console.log(typeof(response));
	     this.router.navigate(['/main', { response } ]); 
	   });
	 });
	}

  callsNextPage() {
  	this.router.navigate(['/main']);
  }

}
