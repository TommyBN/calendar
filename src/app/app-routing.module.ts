import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome page/welcome.component';
import { AuthService } from './welcome page/auth.service';

const routes: Routes = [
    { path:'', pathMatch: 'full', redirectTo: 'welcome' },
    { path: 'welcome', component: WelcomeComponent },
    { 
      path: 'user/:id', 
      loadChildren: () => import('./user profile/user.module')
      .then(m => m.UserModule), 
      canLoad: [AuthService], pathMatch: 'prefix' 
    },
    
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }