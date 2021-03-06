import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView }
  from 'angular-calendar';
import { colors } from './colors';
import { Store, select } from '@ngrx/store';
import { UserService } from '../../user.service';
import { Goal } from '../../goals/Goal';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-cal-month',
  templateUrl: './cal-month.component.html'
})

export class CalendarMonthComponent implements OnInit {

  goal: Goal;
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date(); 
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();

  constructor(
    private store: Store<any>, 
    private userService: UserService,
    private eventsSErvice: EventsService) { }

  async ngOnInit() {
    
    this.store.select('currentGoal').subscribe(
      goal => {
        this.eventsSErvice.getGoalEvent(goal.event_id).subscribe(
          event => this.viewDate = event.start
        )
      }
    )

    // this.store.select('events').subscribe(
    //   events => {
    //         for (let event of events) {
    //           event.start = new Date(event.start)
    //         }
    //         this.events = events;
    //   })
  }


  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();
  }


}