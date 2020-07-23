import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalsRoutingModule } from './personals-routing.module';
import { PersonalsComponent } from './all/personals.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule, 
    PersonalsRoutingModule,
    StoreModule.forFeature('personal-s', {})
  ],
  declarations: [
    PersonalsComponent,
  ]
})
export class PersonalsModule { }
