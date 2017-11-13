import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SearchComponent } from './search/search.component';
import  { FavoritesComponent } from './favorites.component';


const routes: Routes = [
	{
		path: 'favorites',
		component: FavoritesComponent,
		children: [
			{
				path: '',
				component: RestaurantsComponent
			},
			{
				path: '',
				component: FavoritesComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
