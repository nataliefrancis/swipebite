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
 
import { Injectable } from '@angular/core';

import { MatchComponent } from './matched/match/match.component';
import { SettingsComponent } from './settings/settings/settings.component';

import { FormsModule } from '@angular/forms';
// import { LandingComponent} from './landing/landing.component';



@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    SearchComponent,
    RestaurantsComponent,
    WebpageComponent,
    MatchComponent,
    SettingsComponent,
    // LandingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule, 
    NgbDropdownModule,
    LandingRoutingModule,
    HttpModule,
    LandingModule,
    MainFoodModule,
    AppRoutingModule,
    FormsModule
  ],
 
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
