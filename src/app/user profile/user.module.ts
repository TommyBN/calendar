import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LayoutModule, SplitterModule, PanelBarModule } from '@progress/kendo-angular-layout';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { MenuComponent } from './main/menu/menu.component';
import { MainComponent } from './main/main.component';
import { CalendarComponent } from './main/calendar/calendar.component'
import { CalendarHeaderComponent } from './main/calendar/header/calendar-header.component';
import { UserService, user } from './User';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    LayoutModule, SplitterModule, PanelBarModule,
    UserRoutingModule,
    StoreModule.forFeature('user', user),
    HttpClientModule
  ],
  declarations: [
    MainComponent,
    MenuComponent,
    CalendarComponent,
    CalendarHeaderComponent
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
