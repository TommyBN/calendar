// import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';
// import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView }
//   from 'angular-calendar';
// import { colors } from './colors';
// import { Store, select } from '@ngrx/store';
// import { UserService } from '../../../user.service';

// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html'
// })

// export class CalendarComponent implements OnInit {

//   view: CalendarView = CalendarView.Month;
//   viewDate: Date = new Date();
//   events: CalendarEvent[] = [];
//   refresh: Subject<any> = new Subject();

//   constructor(private store: Store<any>, private userService: UserService) { }

//   async ngOnInit() {
//     this.store.select('events').subscribe(
//       events => {
//             for (let event of events) {
//               event.start = new Date(event.start)
//             }
//             this.events = events;
//       })
//   }


//   eventTimesChanged({
//     event,
//     newStart,
//     newEnd,
//   }: CalendarEventTimesChangedEvent): void {
//     event.start = newStart;
//     event.end = newEnd;
//     this.refresh.next();
//   }


// }