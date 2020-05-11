
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'goals', loadChildren: () => import('./goals/goals.module').then( m => m.GoalsModule), pathMatch: 'prefix' },
    { path: 'todos', loadChildren: () => import('./todo/todo.module').then( m => m.TodoModule), pathMatch: 'prefix' },
    { path: 'sports-and-hobbies', loadChildren: () => import('./sports/sports.module').then( m => m.SportsModule), pathMatch: 'prefix' },
    { path: 'personal-area', loadChildren: () => import('./personals/personals.module').then( m => m.PersonalsModule), pathMatch: 'prefix'},    
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }



