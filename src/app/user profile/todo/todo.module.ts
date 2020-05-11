import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { TodoComponent } from './single/todo.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo-reducer';
import { EditTodoComponent } from './edit/edit-todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    TodoRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('todo', todoReducer),
    ReactiveFormsModule
    
  ],
  declarations: [
    AllTodosComponent,
    TodoComponent,
    EditTodoComponent
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }
