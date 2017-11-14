import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-buttons',
  templateUrl: './onboarding-buttons.component.html',
  styleUrls: ['./onboarding-buttons.component.css']
})
export class OnboardingButtonsComponent implements OnInit {

	// isFirstCard: boolean;
	// isSecondCard: boolean;
	// isThirdCard: boolean;
	// isFourthCard: boolean

  constructor( private router: Router) { 
  	// this.isFirstCard = false;
  	// this.isSecondCard = false;
  	// this.isThirdCard= false;
  	// this.isFourthCard = false; 
  }

  ngOnInit() {
  }

  showCard(id) {
  	console.log(id)
    // if (id === 1) {
    //   this.router.navigate(['/']);
    //   // window.location.href = "/second"
    // }
  	if (id === 2) {
  		this.router.navigate(['/landing/second']);
  		// window.location.href = "/second"
  	}
  	if ( id === 3 ) {
  		this.router.navigate(['/landing/third']);
  	}
  	if (id === 4 ) {
  		this.router.navigate(['/landing/fourth']);
  	}
  }
 }

