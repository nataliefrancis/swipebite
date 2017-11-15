import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {


	newZipcode = Number;
	currentUser;
  distance: number;

  constructor(private router: Router, private apiService: ApiService) { }


  ngOnInit() {
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

  updateDistance(distanceMiles) {
    // CONVERT DISTANCE FROM MILES TO METERS
    let distanceMeters = distanceMiles * 1609.344;

    this.currentUser.distance = distanceMeters;
    console.log(this.currentUser)
    console.log(this.currentUser);
    this.apiService.updateUser(this.currentUser)
      .subscribe(response => {
      this.currentUser = response.json();
    });
  }

//need to fix to remove setting services

  // saveZipcode(newZipcode) {
  //     console.log("saving zipcode");
  //     console.log(newZipcode);
  //     this.settingsService.saveZipcode(newZipcode)
  //             .subscribe(response => {
  //           console.log(response.json());
  //           let zipcode = response.json();
  //       });
  // }


 // getImage (newImage ) {
 //    this.settingsService.getImage(newImage)
 //    .subscribe( response => {
 //      let image = []
 //    })
 //  }

  callsNextPage() {
  	this.router.navigate(['/main']);


  }
}