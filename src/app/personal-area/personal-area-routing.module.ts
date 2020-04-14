import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalAreaComponent } from './all/personal-area.component';
import { PersonalAreaDetailsComponent } from './single/personal-area-details.component';


const routes: Routes = [
  { path: '', component: PersonalAreaComponent },
  { path: ':id', component: PersonalAreaDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalAreaRoutingModule { }