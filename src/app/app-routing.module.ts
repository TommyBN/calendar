import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path:'', pathMatch: 'full', redirectTo: 'main' },
    { path: 'main', loadChildren: () => import('./main-menu/main-menu.module').then(m => m.MainMenuModule)},
    { path: 'tasks', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
    { path: 'goals', loadChildren: () => import('./goals/goals.module').then( m => m.GoalsModule)},
    { path: 'sports&hobbies', loadChildren: () => import('./sports&hobbies/sports&hobbies.module').then( m => m.SportsAndHobbiesModule)},
    { path: 'personal-area', loadChildren: () => import('./personal-area/personal-area.module').then( m => m.PersonalAreaModule)},
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }