import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsAndHobbiesRoutingModule } from './sports&hobbies-routing.module';
import { SportsAndHobbiesComponent } from './sports&hobbies.component';

@NgModule({
  imports: [
    CommonModule, 
    SportsAndHobbiesRoutingModule
  ],
  declarations: [
    SportsAndHobbiesComponent
  ]
})
export class SportsAndHobbiesModule { }
