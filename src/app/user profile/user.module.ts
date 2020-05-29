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
import { CalendarComponent } from './calendar/calendar.component'
import { CalendarHeaderComponent } from './calendar/header/calendar-header.component';
import { UserService, user } from './User';
import { TodoService } from './main/todo/Todo';
import { EditTodoComponent } from './main/todo/edit/edit-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllTodosComponent } from './main/todo/all-todos/all-todos.component';
import { AllGoalsComponent } from './main/goals/all/all-goals.component';
import { GoalDetailsComponent } from './main/goals/single/goal-details.component';
import { EditGoalComponent } from './main/goals/edit/edit-goal.component';
import { GoalsService } from './main/goals/goals.service';

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
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    MenuComponent,
    CalendarComponent,
    CalendarHeaderComponent,
    AllTodosComponent,
    EditTodoComponent,
    AllGoalsComponent,
    GoalDetailsComponent,
    EditGoalComponent
  ],
  providers:[
    UserService,
    TodoService,
    GoalsService
  ]
})
export class UserModule { }
