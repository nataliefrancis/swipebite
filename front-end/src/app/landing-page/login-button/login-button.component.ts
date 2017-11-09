import { Component, OnInit } from '@angular/core';
import { LoginButtonService } from './login-button.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

	newUser = String;

  constructor( private loginButtonService : LoginButtonService) { }

  ngOnInit() {
  }


saveUser(newUser) {
      console.log("saving user");
      console.log(newUser);
      this.loginButtonService.saveUser(newUser)
          .subscribe(response => {
        console.log(response.json());
        let user = response.json();
        window.location.href = "/auth/google" + user.id;
      })
    }


}



