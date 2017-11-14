import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	
	isCollapsed: boolean;

  constructor(private router: Router) { 
  	this.isCollapsed = true;
  }

  ngOnInit() {
  }

  callsNextPage() {
  	this.router.navigate(['/matched']);
  }

}
