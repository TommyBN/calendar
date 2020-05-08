import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path:'', pathMatch: 'full', redirectTo: 'main' },
    { path: 'main', component: MainComponent },
    { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule), pathMatch: 'prefix' },
    { path: 'goals', loadChildren: () => import('./goals/goals.module').then( m => m.GoalsModule), pathMatch: 'prefix' },
    { path: 'sports-and-hobbies', loadChildren: () => import('./sports/sports.module').then( m => m.SportsModule), pathMatch: 'prefix' },
    { path: 'personal-area', loadChildren: () => import('./personals/personals.module').then( m => m.PersonalsModule), pathMatch: 'prefix'},
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }