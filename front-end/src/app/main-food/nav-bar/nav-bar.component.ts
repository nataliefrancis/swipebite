import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {
	
	isCollapsed: boolean;

    constructor() { 
  		this.isCollapsed = true;
  	}

  	ngOnInit() {
  	}

}
