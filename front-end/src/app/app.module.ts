import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
