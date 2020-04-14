import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllGoalsComponent } from './all/all-goals.component';


const routes: Routes = [
  {
    path: '',
    component: AllGoalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }