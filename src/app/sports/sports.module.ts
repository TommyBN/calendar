import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './all-sports/sports.component';
import { SingleSportComponent } from './single/single-sport.component';

@NgModule({
  imports: [
    CommonModule, 
    SportsRoutingModule
  ],
  declarations: [
    SportsComponent,
    SingleSportComponent
  ]
})
export class SportsModule { }
