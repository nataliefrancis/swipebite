import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // showCard(id) {
  // 	console.log(id)
  //   if (id === 1) {
  //     this.router.navigate(['/']);
  //     // window.location.href = "/second"
  //   }
  // 	if (id === 2) {
  // 		this.router.navigate(['/landing/second']);
  // 		// window.location.href = "/second"
  // 	}
  // 	if ( id === 3 ) {
  // 		this.router.navigate(['/landing/third']);
  // 	}
  // 	if (id === 4 ) {
  // 		this.router.navigate(['/landing/fourth']);
  // 	}
  // }
}
