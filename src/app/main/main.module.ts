import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule, 
    MainMenuRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainMenuModule { }