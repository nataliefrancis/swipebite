import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { FoodPicComponent } from './foodPic/foodPic.component';

import { MainFoodService } from './mainFood.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
  	ButtonsComponent,
  	FoodPicComponent
  ],
  providers: [ MainFoodService ],
  exports: [ 
    ButtonsComponent,
    FoodPicComponent
  ]
})
export class MainFoodModule { }
