import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MainComponent } from './main/main.component';
import { MatchedComponent } from './matched/matched.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'matched',
        component: MatchedComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    // {
    // 	path: 'main',
    //     // redirectTo: 'main',
    //     // pathMatch: 'full',
    //     // children: [
    //     //     {
    //     //         path: '',
    //     //         component: MainFoodComponent,

    //     //     }
    //     // ]
    //     component: MainFoodComponent
    // },
    // {
    //     path: '',
    //     redirectTo: 'landing',
    //     // loadChildren: './landing/landing.module',
    //     pathMatch: 'full',
    //     // component: LandingComponent,
    // }
    // {
    //     path:'favorites',
    //     // redirectTo: '/favorites',
    //     // pathMatch: 'full',
    //     component: FavoritesComponent
    // }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}