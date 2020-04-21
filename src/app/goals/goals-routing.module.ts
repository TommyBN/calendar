import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllGoalsComponent } from './all/all-goals.component';
import { GoalDetailsComponent } from './single/goal-details.component';
import { EditGoalComponent } from './edit/edit-goal.component';


const routes: Routes = [
  { path: '', component: AllGoalsComponent },
  { path: ':id', component: GoalDetailsComponent},
  { path: ':id/edit', component: EditGoalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }