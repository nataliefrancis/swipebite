import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing-service.service';
import { isDevMode } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

	// newUser : string;
  baseUrl : string;
  coordinates : any;
  user = null;
  userInfo: any;

  constructor( private landingService : LandingService, private router: Router ) { }

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
    .then((res) => {
      this.userInfo = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]])
      let newUser = res.additionalUserInfo;
      let firebaseId = this.userInfo.uid;
      console.log(newUser);
      let userObject = {
        firebase_id: firebaseId,
        name: newUser.profile.name,
        email: newUser.profile.email,
        image: newUser.profile.picture
      }
      if(newUser.isNewUser) {
        console.log('this is a new user!');
        this.landingService.createUser(userObject)
        .subscribe(res => {
          console.log(res.json());
        })
      }
      console.log('other condition!');
      this.router.navigateByUrl('/map');
    })
    .catch((err) => console.log(err));
  }
    
}

///////////////////////// GRAVEYARD ///////////////////////////////////////////

/*
DOG CHECK IN
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Http } from '@angular/http';
import { ApiService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  user = null;
  userInfo: any;

  constructor(private authService: AuthService, private router: Router, private http: Http, private apiService: ApiService) { 

 }

 signInWithGoogle() {
   this.authService.signInWithGoogle()
   .then((res) => {
     this.userInfo = JSON.parse(window.localStorage[Object.keys(window.localStorage)[0]])
     let newUser = res.additionalUserInfo;
     let firebaseId = this.userInfo.uid;
     console.log(newUser);
     let userObject = {
       firebase_id: firebaseId,
       name: newUser.profile.name,
       email: newUser.profile.email,
       image: newUser.profile.picture
     }
     if(newUser.isNewUser) {
       this.apiService.createUser(userObject)
       .subscribe(res => {
         console.log(res.json());
       })
     }
     this.router.navigateByUrl('/map')
   })
   .catch((err) => console.log(err));
 }

  ngOnInit() {
  }

}
*/

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