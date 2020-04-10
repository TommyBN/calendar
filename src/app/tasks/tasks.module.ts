import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './task.reducer';

@NgModule({
  imports: [
    CommonModule, 
    TasksRoutingModule,
    StoreModule.forFeature('tasks',taskReducer),
    
  ],
  declarations: [
    AllTasksComponent
  ]
})
export class TasksModule { }
