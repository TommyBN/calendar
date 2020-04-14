import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { PersonalAreaComponent } from './personal-area.component';
import { StoreModule } from '@ngrx/store';
import { paReducer } from './pa-reducer';

@NgModule({
  imports: [
    CommonModule, 
    PersonalAreaRoutingModule,
    StoreModule.forFeature('personal-area', paReducer)
  ],
  declarations: [
    PersonalAreaComponent
  ]
})
export class PersonalAreaModule { }
