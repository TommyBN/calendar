import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsAndHobbiesComponent } from './sports&hobbies.component';


const routes: Routes = [
  {
    path: '',
    component: SportsAndHobbiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsAndHobbiesRoutingModule { }