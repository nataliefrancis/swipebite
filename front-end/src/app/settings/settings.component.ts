import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	newZipcode = Number;

  constructor(private router: Router, private settingsService : SettingsService) { }

  ngOnInit() {
  }

  saveZipcode(newZipcode) {
      console.log("saving zipcode");
      console.log(newZipcode);
      this.settingsService.saveZipcode(newZipcode)
              .subscribe(response => {
            console.log(response.json());
            let zipcode = response.json();
        });
  }


 // getImage (newImage ) {
 //    this.settingsService.getImage(newImage)
 //    .subscribe( response => {
 //      let image = []
 //    })
 //  }

  callsNextPage() {
  	this.router.navigate(['/main']);
  }
}
