import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FoodPicComponent } from './food-pic/food-pic.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { MainFoodComponent } from './main-food.component';


const aboutRoutes: Routes = [
{
	path: '',
	component: MainFoodComponent,
	children: [
		{
			path: '',
			component: ButtonsComponent
		},
		{
			path: '',
			component: FoodPicComponent
		},
		{
			path: '',
			component: NavbarComponent
		},
	]
}
];

	@NgModule({
  imports: [
    // CommonModule,
    // ButtonsComponent,
    // FoodPicComponent,
    // NavbarComponent,
    // MainFoodComponent,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [],
  exports: [RouterModule,
  // MainFoodComponent
  ]
})
export class MainFoodRoutingModule { }