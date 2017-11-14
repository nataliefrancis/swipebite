import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  callsNextPage() {
  	this.router.navigate(['/']);
  }

}
