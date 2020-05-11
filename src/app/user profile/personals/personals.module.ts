import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalsRoutingModule } from './personals-routing.module';
import { PersonalsComponent } from './all/personals.component';
import { StoreModule } from '@ngrx/store';
import { PersonalDetailsComponent } from './single/personal-details.component';

@NgModule({
  imports: [
    CommonModule, 
    PersonalsRoutingModule,
    StoreModule.forFeature('personal-s', {})
  ],
  declarations: [
    PersonalsComponent,
    PersonalDetailsComponent
  ]
})
export class PersonalsModule { }
