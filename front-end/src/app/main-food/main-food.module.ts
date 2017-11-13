import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { FoodPicComponent } from './food-pic/food-pic.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { MainFoodComponent } from './main-food.component';
import { NgbModule, NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgbCollapseModule,
    NgbDropdownModule
  ],
  declarations: [
  	ButtonsComponent, 
  	FoodPicComponent, 
  	NavbarComponent, 
  	MainFoodComponent
  ],
  exports: [ 
	  ButtonsComponent, 
	  FoodPicComponent, 
	  NavbarComponent, 
	  MainFoodComponent
  ]
})
export class MainFoodModule { }
