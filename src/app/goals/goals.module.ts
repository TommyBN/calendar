import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsRoutingModule } from './goals-routing.module';
import { AllGoalsComponent } from './all-goals.component';

@NgModule({
  imports: [
    CommonModule, 
    GoalsRoutingModule
  ],
  declarations: [
    AllGoalsComponent
  ]
})
export class GoalsModule { }
