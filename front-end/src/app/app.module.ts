import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule, NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

import { Injectable } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { SettingsComponent } from './settings/settings.component';
import { MainComponent } from './main/main.component';
import { MatchedComponent } from './matched/matched.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { WebpageComponent } from './webpage/webpage.component';

import { ApiService } from './api.service';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SettingsComponent,
    MainComponent,
    MatchedComponent,
    FavoritesComponent,
    WebpageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule,
    NgbDropdownModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
