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
  coordinates : any;

  constructor( private landingService : LandingService ) { }

  ngOnInit() {    

    // SETS THE BASE URL
    if(isDevMode()) {
      this.baseUrl = 'http://localhost:3000';
    } else {
      this.baseUrl = '';
    }
  }

  // FINDS THE USER'S LOCATION FROM THE BROWSER WINDOW 
  // AND SEND IT TO GOOGLE PLACES API
  callGooglePlacesAPI() {
    window.navigator.geolocation.getCurrentPosition(position => {
      this.coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }

      this.landingService.callGooglePlacesAPI(this.coordinates)
        .subscribe(response => {
        console.log(response.json());
      });
    });
  }

  // CALLS FIREBASE SDK FOR GOOGLE AUTHENTICATION
  signInFirebaseGoogle() {
    console.log('hitting firebase function on login button component');
    this.landingService.signInFirebaseGoogle()
      .subscribe(response => {
      console.log(response.json());
    });
  }
}

///////////////////////// GRAVEYARD ///////////////////////////////////////////

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