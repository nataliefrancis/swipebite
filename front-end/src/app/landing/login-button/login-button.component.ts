import { Component, OnInit } from '@angular/core';
import { LandingService } from '../landing-service.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

	newUser = String;

  constructor( private landingService : LandingService ) { }

  ngOnInit() {
  }

authenticateUser() {
	this.landingService.authenticateUser()
}

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


}

