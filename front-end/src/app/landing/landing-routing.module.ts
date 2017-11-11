import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstCardComponent } from './first-card/first-card.component';
import { SecondCardComponent } from './second-card/second-card.component';
import { ThirdCardComponent } from './third-card/third-card.component';
import { FourthCardComponent } from './fourth-card/fourth-card.component';
import { LandingComponent } from './landing.component';


const aboutRoutes: Routes = [
{
	path: 'landing',
	component: LandingComponent,
	children: [
		{
			path: '',
			component: FirstCardComponent
		},
		{
			path: 'second',
			component: SecondCardComponent
		},
		{
			path: 'third',
			component: ThirdCardComponent
		},
		{
			path: 'fourth',
			component: FourthCardComponent
		}
	]
}
]

	@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LandingRoutingModule { }