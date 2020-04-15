import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllTodosComponent } from './all-todos/all-todos.component';
import { TodoComponent } from './single/todo.component';


const routes: Routes = [
  { path: '', component: AllTodosComponent },
  { path: ':id', component: TodoComponent, pathMatch:'full' },
  { path: ':id/:id2', component: TodoComponent, pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }