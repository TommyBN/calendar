import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './todo-routing.module';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { TodoComponent } from './single/todo.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, 
    TasksRoutingModule,
    StoreModule.forFeature('todo',todoReducer),
    HttpClientModule
    
  ],
  declarations: [
    AllTodosComponent,
    TodoComponent
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }
