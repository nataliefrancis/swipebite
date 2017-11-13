import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './setting.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ SettingsService],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
