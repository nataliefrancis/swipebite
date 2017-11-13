import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MainFoodComponent } from './main-food/main-food.component';

import { LandingModule } from './landing/landing.module';
import { MainFoodModule } from './main-food/main-food.module';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        // loadChildren: './landing/landing.module',
        pathMatch: 'full',
        // component: LandingComponent
    },
    {
    	path: 'landing/main',
        redirectTo: '/main',
        pathMatch: 'full',
        // component: MainFoodComponent
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