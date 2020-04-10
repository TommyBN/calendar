import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAreaRoutingModule } from './personal-area-routing.module';
import { PersonalAreaComponent } from './personal-area.component';

@NgModule({
  imports: [
    CommonModule, 
    PersonalAreaRoutingModule
  ],
  declarations: [
    PersonalAreaComponent
  ]
})
export class PersonalAreaModule { }
