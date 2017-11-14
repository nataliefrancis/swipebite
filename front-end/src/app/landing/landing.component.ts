import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { isDevMode } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	baseUrl : string;
 	currentUser;

  constructor(private router: Router, private apiService : ApiService, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    // SETS THE BASE URL
    if(isDevMode()) {
      this.baseUrl = "http://localhost:3000";
    } else {
      this.baseUrl = "";
    }


  }

  // DETERMINES WHICH USER IS CURRENTLY LOGGED IN
  determineCurrentUser() {
    console.log('hitting determineCurrentUser function');
    this.activatedRoute.params.forEach(param => {
      console.log("paramID we're sending from the front end");
      console.log(param);
      this.apiService.showOneUser(param.id)
      .subscribe(response => {
        console.log("what we're getting back from google authentication");
        console.log(response.json());
        this.currentUser = response.json();
      });
    });
  }

  callsPreviousPage() {
    this.router.navigate(['/admin']);
  }
  
  callsNextPage() {
  	this.router.navigate(['/main']);
  }

}
