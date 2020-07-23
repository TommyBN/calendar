
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './base/main.component';
import { MenuComponent } from './base/menu/menu.component';
import { AllTodosComponent } from './todo/all-todos/all-todos.component';

const routes: Routes = [
    { path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: MenuComponent},
      { path: 'sports', loadChildren: () => import('./modules/sports/sports.module').then( m => m.SportsModule), pathMatch: 'prefix' },
      { path: 'personals', loadChildren: () => import('./modules/personals/personals.module').then( m => m.PersonalsModule), pathMatch: 'prefix'},    
    ]},
    
  ];


  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }



