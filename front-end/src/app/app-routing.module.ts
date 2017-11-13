import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MainFoodComponent } from './main-food/main-food.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
        // component: LandingComponent
    },
    {
    	path: 'main',
        // redirectTo: '/main',
        // pathMatch: 'full',
        component: MainFoodComponent
    },
    {
        path:'favorites',
        // redirectTo: '/favorites',
        // pathMatch: 'full',
        component: FavoritesComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}