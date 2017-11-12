import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './favorites/search/search.component';
import { RestaurantsComponent } from './favorites/restaurants/restaurants.component';
import { WebpageComponent } from './webpage/webpage.component';
=======
// import { LandingModule } from './landing/landing.module';
import { HttpModule } from '@angular/http';
import { LandingModule } from './landing/landing.module';
import { AppRoutingModule } from './app-routing.module';
import { LandingRoutingModule } from './landing/landing-routing.module';
import { MainFoodModule } from './main-food/main-food.module';
import { MainFoodRoutingModule } from './main-food/main-food-routing.module';
import { NgbModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { LoginButtonComponent } from './landing-page/login-button/login-button.component';

import { Injectable } from '@angular/core';

>>>>>>> 442398eb26ab502ab82fe7b8d770ce770c591087

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FavoritesComponent,
    SearchComponent,
    RestaurantsComponent,
    WebpageComponent
  
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule
=======
    // LandingPageComponent,
    // LoginButtonComponent,
    // LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    NgbDropdownModule,
    LandingModule,
    MainFoodModule
    // LandingModule,
>>>>>>> 442398eb26ab502ab82fe7b8d770ce770c591087
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
