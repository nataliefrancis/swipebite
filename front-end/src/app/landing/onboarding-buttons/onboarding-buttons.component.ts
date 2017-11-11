import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding-buttons',
  templateUrl: './onboarding-buttons.component.html',
  styleUrls: ['./onboarding-buttons.component.css']
})
export class OnboardingButtonsComponent implements OnInit {

	isFirstCard: boolean;
	isSecondCard: boolean;
	isThirdCard: boolean;
	isFourthCard: boolean

  constructor() { 
  	this.isFirstCard = false;
  	this.isSecondCard = false;
  	this.isThirdCard= false;
  	this.isFourthCard = false; }

  ngOnInit() {
  }

}
