import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalsComponent } from './all/personals.component';
import { PersonalDetailsComponent } from './single/personal-details.component';


const routes: Routes = [
  { path: '', component: PersonalsComponent },
  { path: ':id', component: PersonalDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalsRoutingModule { }