import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { FoodPicComponent } from './foodPic/foodPic.component';
import { MainFoodComponent} from './mainFood.component';

import { MainFoodService } from './mainFood.service';
import { NavbarComponent } from './navbar/navbar.component';

import { NgbModule, NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


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
  providers: [ MainFoodService ],
  exports: [ 
    ButtonsComponent,
    FoodPicComponent,
    NavbarComponent
  ]
})
export class MainFoodModule { }
