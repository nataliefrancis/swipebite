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

     if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords); 
      });
   }
    // if(window.navigator.geolocation){
    //   window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    // };

    
  }

  callGooglePlacesAPI() {
    this.landingService.callGooglePlacesAPI()
      .subscribe(response => {
        console.log(response.json());
    });
  }
}


// authenticateUser() {
// 	this.landingService.authenticateUser()
// 	.subscribe(response => {
// 		console.log(response.json());
// 	});
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
