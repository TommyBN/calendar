import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './all-sports/sports.component';
import { SingleSportComponent } from './single/single-sport.component';
import { SportsService } from './sports.service';
import { StoreModule } from '@ngrx/store';
import { sportsReducer } from './sports-reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, 
    SportsRoutingModule,
    StoreModule.forFeature('sports', sportsReducer),
    HttpClientModule
  ],
  declarations: [
    SportsComponent,
    SingleSportComponent
  ],
  providers:[
    SportsService
  ]
})
export class SportsModule { }
