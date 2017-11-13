import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MainFoodComponent } from './main-food/main-food.component';

import { LandingModule } from './landing/landing.module';
import { MainFoodModule } from './main-food/main-food.module';
// import { MainFoodRoutingModule } from './main-food/main-food-routing.module';

import { ButtonsComponent } from './main-food/buttons/buttons.component';
import { FoodPicComponent } from './main-food/food-pic/food-pic.component';
import { NavbarComponent } from './main-food/nav-bar/nav-bar.component';


const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'landing',
    //     // loadChildren: './landing/landing.module',
    //     pathMatch: 'full',
    //     // component: LandingComponent
    // },
    {
    	path: '',
        // redirectTo: 'main',
        pathMatch: 'full',
        children: [
        {
            path: '',
            component: MainFoodComponent
        }
    ]
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