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
 	currentUser;

  constructor(private router: Router, private apiService : ApiService) {}

  ngOnInit() {

    // SETS THE BASE URL
    if(isDevMode()) {
      this.baseUrl = "http://localhost:3000";
    } else {
      this.baseUrl = "";
    }

    this.determineCurrentUser();
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

  callsPreviousPage() {
    this.router.navigate(['/admin']);
  }
  
  callsNextPage() {
  	this.router.navigate(['/main']);
  }

}


    

  