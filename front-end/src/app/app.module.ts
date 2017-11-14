import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './favorites/search/search.component';
import { RestaurantsComponent } from './favorites/restaurants/restaurants.component';
import { WebpageComponent } from './webpage/webpage.component';

import { HttpModule } from '@angular/http';
import { LandingModule } from './landing/landing.module';
import { AppRoutingModule } from './app-routing.module';
import { MainFoodModule } from './main-food/main-food.module';

import { LandingRoutingModule } from './landing/landing-routing.module';
import { MainFoodRoutingModule } from './main-food/main-food-routing.module';

// import { environment } from '../environments/environment';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
 
import { Injectable } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    SearchComponent,
    RestaurantsComponent,
    WebpageComponent
  
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule, 
    NgbDropdownModule,
    AppRoutingModule,
    LandingRoutingModule,
    HttpModule,
    LandingModule,
    MainFoodModule,
    // AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
  ],
 
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
