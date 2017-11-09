import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LandingService } from './landing-service.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginButtonComponent],
  providers: [LandingService],
  exports: [ LoginButtonComponent ]
})
export class LandingModule { }
