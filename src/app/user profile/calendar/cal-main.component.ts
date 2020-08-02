import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView }
  from 'angular-calendar';
// import { colors } from './colors';
import { Store, select } from '@ngrx/store';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cal-main',
  templateUrl:'./cal-main.component.html',
   styleUrls:['./cal-main.component.css']
})

export class CalendarMainComponent implements OnInit {

//   view: CalendarView = CalendarView.Month;
//   viewDate: Date = new Date();
  currentDay: Date;
  events: CalendarEvent[] = [];
  refresh: Subject<any> = new Subject();
  viewDay = true;
  viewMonth = false;
  viewEvent = true;

  constructor(private store: Store<any>, private userService: UserService) { }

  async ngOnInit() {
    this.store.select('events').subscribe(
      events => {
            for (let event of events) {
              event.start = new Date(event.start)
            }
            this.events = events;
      })
  }


//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd,
//   }: CalendarEventTimesChangedEvent): void {
//     event.start = newStart;
//     event.end = newEnd;
//     this.refresh.next();
//   }


}