import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstCardComponent } from './first-card/first-card.component';
import { SecondCardComponent } from './second-card/second-card.component';
import { ThirdCardComponent } from './third-card/third-card.component';
import { FourthCardComponent } from './fourth-card/fourth-card.component';
import { LandingComponent } from './landing.component';

// import { OnboardingButtonsComponent} from './onboarding-buttons/onboarding-buttons.component';



const aboutRoutes: Routes = [
{
	path: 'landing',
	// component: LandingComponent,
	children: [
		{
			path: '',
			component: FirstCardComponent,
			// outlet: 'landingCard'
		},
		{
			path: 'second',
			component: SecondCardComponent,
			// outlet: 'landingCard'
		},
		{
			path: 'third',
			component: ThirdCardComponent,
			// outlet: 'landingCard'
		},
		{
			path: 'fourth',
			component: FourthCardComponent,
			// outlet: 'landingCard'
		}
	],
	
}
];

	@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class LandingRoutingModule { }