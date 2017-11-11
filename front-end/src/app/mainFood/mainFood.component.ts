import { Component, OnInit } from '@angular/core';
import { MainFoodService } from './mainFood.service';


@Component({
  selector: 'app-mainFood',
  templateUrl: './mainFood.component.html',
  styleUrls: ['./mainFood.component.css']
})
export class MainFoodComponent implements OnInit {

	user = [];

  constructor(private mainFoodService : MainFoodService) { }

  ngOnInit() {
  	this.mainFoodService.getUser()
  		.subscribe(response => {
  			console.log(response.json());
  			this.user = response.json()
  		});
  }

}
