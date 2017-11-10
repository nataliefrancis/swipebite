import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatchedModule } from './matched/matched.module';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatchedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
