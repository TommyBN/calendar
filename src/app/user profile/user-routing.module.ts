
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';

const routes: Routes = [
    { path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: MenuComponent},
      { path: 'goals', loadChildren: () => import('./goals/goals.module').then( m => m.GoalsModule), pathMatch: 'prefix' },
      { path: 'todos', loadChildren: () => import('./todo/todo.module').then( m => m.TodoModule), pathMatch: 'prefix' },
      { path: 'sports-and-hobbies', loadChildren: () => import('./sports/sports.module').then( m => m.SportsModule), pathMatch: 'prefix' },
      { path: 'personal-area', loadChildren: () => import('./personals/personals.module').then( m => m.PersonalsModule), pathMatch: 'prefix'},    
    ]},
    
  ];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }



