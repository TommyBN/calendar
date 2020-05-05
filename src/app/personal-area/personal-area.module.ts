import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { PersonalAreaComponent } from './all/personal-area.component';
import { StoreModule } from '@ngrx/store';
import { PersonalAreaDetailsComponent } from './single/personal-area-details.component';

@NgModule({
  imports: [
    CommonModule, 
    PersonalAreaRoutingModule,
    StoreModule.forFeature('personal-area', {})
  ],
  declarations: [
    PersonalAreaComponent,
    PersonalAreaDetailsComponent
  ]
})
export class PersonalAreaModule { }
