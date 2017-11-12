import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { SearchComponent } from './favorites/search/search.component';
import { RestaurantsComponent } from './favorites/restaurants/restaurants.component';
import { WebpageComponent } from './webpage/webpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    SearchComponent,
    RestaurantsComponent,
    WebpageComponent
  
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
