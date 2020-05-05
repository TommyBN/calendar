import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LayoutModule, SplitterModule, PanelBarModule } from '@progress/kendo-angular-layout';

import { AppComponent } from './app.component';
import { ScheduleComponent} from './calendar/calendar.component';
import { ScheduleHeaderComponent } from './calendar/calendar-header/calendar-header.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './state/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    ScheduleHeaderComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CommonModule,
    LayoutModule, SplitterModule, PanelBarModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      name: 'my-calendar devtools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
