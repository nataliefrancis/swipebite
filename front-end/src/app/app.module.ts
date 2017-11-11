import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDropdownModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
  
import  { AppRoutingModule } from './app-routing.module';
import  { MainFoodRoutingModule } from './mainFood/mainFood-routing.module';

// import { LandingModule } from './landing/landing.module';
import { HttpModule } from '@angular/http';
import { LandingModule } from './landing/landing.module';


import { AppComponent } from './app.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
// import { LoginButtonComponent } from './landing-page/login-button/login-button.component';

import { Injectable } from '@angular/core';


import { MainFoodModule } from './mainFood/mainFood.module';


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
    MainFoodRoutingModule,
    MainFoodModule,
    HttpModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    NgbDropdownModule


    HttpModule,
    LandingModule
    // LandingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
