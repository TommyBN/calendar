import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LayoutModule, SplitterModule, PanelBarModule } from '@progress/kendo-angular-layout';

import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { MenuComponent } from './base/menu/menu.component';
import { MainComponent } from './base/main.component';
import { CalendarMainComponent } from './calendar/cal-main.component'
import { CalendarHeaderComponent } from './calendar/month/header/calendar-header.component';
import { CalendarDayComponent } from './calendar/day/cal-day.component'
import { CalendarMonthComponent } from './calendar/month/cal-month.component'
import { user, events, todos, goals, currentDay, currentGoal } from './user-reducer';
import { UserService} from './user.service';
import { TodoService } from './todo/todo.service';
import { EditTodoComponent } from './todo/edit/edit-todo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllTodosComponent } from './todo/all-todos/all-todos.component';
import { AllGoalsComponent } from './goals/all/all-goals.component';
import { GoalDetailsComponent } from './goals/single/goal-details.component';
import { EditGoalComponent } from './goals/edit/edit-goal.component';
import { GoalsService } from './goals/goals.service';
import { EventsService } from './calendar/events.service';
import { EventComponent } from './calendar/event/event.component';

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
    StoreModule.forFeature('events', events),
    StoreModule.forFeature('todos', todos),
    StoreModule.forFeature('goals', goals),
    StoreModule.forFeature('current-day', currentDay),
    StoreModule.forFeature('current-goal', currentGoal),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    MainComponent,
    MenuComponent,
    CalendarMainComponent,
    CalendarHeaderComponent,
    CalendarDayComponent,
    CalendarMonthComponent,
    EventComponent,
    AllTodosComponent,
    EditTodoComponent,
    AllGoalsComponent,
    GoalDetailsComponent,
    EditGoalComponent,
  ],
  providers:[
    UserService,
    TodoService,
    GoalsService,
    EventsService
  ]
})
export class UserModule { }
