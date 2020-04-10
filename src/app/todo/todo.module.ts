import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './todo-routing.module';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { StoreModule } from '@ngrx/store';
import { taskReducer } from './todo.reducer';
import { TodoComponent } from './todo.component';

@NgModule({
  imports: [
    CommonModule, 
    TasksRoutingModule,
    StoreModule.forFeature('tasks',taskReducer),
    
  ],
  declarations: [
    AllTodosComponent,
    TodoComponent
  ]
})
export class TodoModule { }
