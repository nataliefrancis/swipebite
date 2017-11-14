import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

	baseUrl : string;
 	

  constructor(private router: Router) { }

  ngOnInit() {
  	 // SETS THE BASE URL
	   if(isDevMode()) {
	     this.baseUrl = "http://localhost:3000";
	   } else {
	     this.baseUrl = "";
	   }
  }

  callsPreviousPage() {
    this.router.navigate(['/admin']);
  }
  
  callsNextPage() {
  	this.router.navigate(['/main']);
  }

}
