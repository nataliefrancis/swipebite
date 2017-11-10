import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
  
import  { AppRoutingModule } from './app-routing.module';
import  { MainFoodRoutingModule } from './mainFood/mainFood-routing.module';

import { AppComponent } from './app.component';

import { MainFoodModule } from './mainFood/mainFood.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainFoodRoutingModule,
    MainFoodModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
