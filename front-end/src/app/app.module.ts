import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { LandingModule } from './landing/landing.module';
import { HttpModule } from '@angular/http';
import { LoginButtonService } from './landing-page/login-button/login-button.service';



import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginButtonComponent } from './landing-page/login-button/login-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginButtonComponent,
    LoginButtonService
    // LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    // LandingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
