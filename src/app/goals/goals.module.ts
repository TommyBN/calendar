import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsRoutingModule } from './goals-routing.module';
import { AllGoalsComponent } from './all/all-goals.component';
import { StoreModule } from '@ngrx/store';
import { goalsReducer } from './goals-reducer';

@NgModule({
  imports: [
    CommonModule, 
    GoalsRoutingModule,
    StoreModule.forFeature('goals', goalsReducer)
  ],
  declarations: [
    AllGoalsComponent
  ]
})
export class GoalsModule { }
