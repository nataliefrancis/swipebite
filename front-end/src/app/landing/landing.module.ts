import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LandingService } from './landing-service.service';
import { HeaderComponent } from './header/header.component';
import { FirstCardComponent } from './first-card/first-card.component';
import { SecondCardComponent } from './second-card/second-card.component';
import { ThirdCardComponent } from './third-card/third-card.component';
import { FourthCardComponent } from './fourth-card/fourth-card.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginButtonComponent, HeaderComponent, FirstCardComponent, SecondCardComponent, ThirdCardComponent, FourthCardComponent],
  providers: [LandingService],
  exports: [ LoginButtonComponent, HeaderComponent, FirstCardComponent]
})
export class LandingModule { }
