import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit { 

  constructor(private router: Router) { }

  ngOnInit() { }
  


  callsNextPage() {
  	this.router.navigate(['/settings']);
  }

}


    

  