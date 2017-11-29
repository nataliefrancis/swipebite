import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MainComponent } from './main/main.component';
import { MatchedComponent } from './matched/matched.component';
import { SettingsComponent } from './settings/settings.component';

import { WebpageComponent } from './webpage/webpage.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'matched/:id',
        component: MatchedComponent
    },
    {
        path: 'favorites',
        component: FavoritesComponent
    },
    {
        path: 'web',
        component: WebpageComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}