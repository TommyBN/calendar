import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { GoalsRoutingModule } from './goals-routing.module';
import { goals } from './Goal';
import { AllGoalsComponent } from './all/all-goals.component';
import { GoalDetailsComponent } from './single/goal-details.component';
import { EditGoalComponent } from './edit/edit-goal.component';
import { GoalsService } from './goals.service';

@NgModule({
  imports: [
    CommonModule, 
    GoalsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('goals', {goals})
  ],
  declarations: [
    AllGoalsComponent,
    GoalDetailsComponent,
    EditGoalComponent
  ],
  providers:[
    GoalsService,
  ]
})
export class GoalsModule { }
