import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing-service.service';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

	newUser : string;
  baseUrl : string;
  location : any;

  constructor( private landingService : LandingService ) { }

  ngOnInit() {    

    if(isDevMode()) {
      this.baseUrl = 'http://localhost:3000';
    } else {
      this.baseUrl = '';
    }
  }

  // FINDS THE USER'S LOCATION FROM THE BROWSER WINDOW
  getPosition() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log('this is the getPosition function');
        console.log(this.location);
      })
    }
  }

  /*
  getPosition = (lat, lon) => {
  navigator.geolocation.getCurrentPosition((position) => { 
    this.lat = position.coords.latitude; 
    this.lon = position.coords.longitude;
   });
  }
  getCurrentLocation(): Observable<any> {
    this.getPosition(this.lat, this.lon);
  */

  callGooglePlacesAPI() {
    console.log('at the login-button component');
    let location = this.getPosition();
    this.landingService.callGooglePlacesAPI(location)
    .subscribe(response => {
      console.log(response.json());
    });
  }

}

///////////////////////// GRAVEYARD ///////////////////////////////////////////


// authenticateUser() {
//   this.landingService.authenticateUser()
//   .subscribe(response => {
//     console.log(response.json());
//   });
// }

// saveUser(newUser) {
//       console.log("saving user");
//       console.log(newUser);
//       this.loginButtonService.saveUser(newUser)
//           .subscribe(response => {
//         console.log(response.json());
//         let user = response.json();
//         window.location.href = "/auth/google" + user.id;
//       })
//     }