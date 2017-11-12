import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {
	show: boolean = false;

	toggleCollapse(){
		this.show = !this.show
	}

  constructor() { }

  ngOnInit() {
  }

}
