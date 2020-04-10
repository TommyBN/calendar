import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTodosComponent } from './all-todos/all-todos.component';
import { TodoComponent } from './todo.component';


const routes: Routes = [
  { path: '', component: AllTodosComponent },
  { path: '/:id', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }