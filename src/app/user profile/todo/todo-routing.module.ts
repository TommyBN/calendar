import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTodosComponent } from './all-todos/all-todos.component';
import { TodoComponent } from './single/todo.component';
import { EditTodoComponent } from './edit/edit-todo.component';


const routes: Routes = [
  { path: '', component: AllTodosComponent },
  { path: ':id', component: TodoComponent },
  { path: ':id/edit', component: EditTodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }