import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ApiService } from '../api.service';
=======
import { SettingsService } from './settings.service';
>>>>>>> a35f4efab17d7773b720b9261416ab9a2e62cb4e

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

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

 callsNextPage() {
      this.router.navigate(['/main']);
  }
}