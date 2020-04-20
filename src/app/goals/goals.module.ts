import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsRoutingModule } from './goals-routing.module';
import { AllGoalsComponent } from './all/all-goals.component';
import { StoreModule } from '@ngrx/store';
import { goalsReducer } from './state/goals.reducer';
import { GoalDetailsComponent } from './single/goal-details.component';
import { GoalsService } from './goals.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, 
    GoalsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('goals', goalsReducer)
  ],
  declarations: [
    AllGoalsComponent,
    GoalDetailsComponent
  ],
  providers:[
    GoalsService,
    
  ]
})
export class GoalsModule { }
