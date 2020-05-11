import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } 
    from 'angular-calendar';
import { colors } from './colors';
import { TodoService } from '../todo/todo.service';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'app-calendar',
    templateUrl:'./calendar.component.html'
})
 
export class  ScheduleComponent implements OnInit {

    view: CalendarView = CalendarView.Month;

    viewDate: Date = new Date(2020,3,24,10,30);
  
    events: CalendarEvent[] = [
      {
        title: 'Draggable event',
        color: colors.yellow,
        start: new Date(),
        draggable: true,
      },
      {
        title: 'A non draggable event',
        color: colors.blue,
        start: new Date(),
      },
      {
        title: 'testing event 1',
        color: colors.yellow,
        start: new Date(2020,3,24,10,30),
        end: new Date(2020,3,24,12,30),
        draggable: true
      },
      // {
      //   title: 'A non draggable event',
      //   color: colors.blue,
      //   start: new Date(),
      // },
    ];
  
    refresh: Subject<any> = new Subject();
    constructor( private store: Store<any>){}
    ngOnInit(){
      this.store.pipe(select('events')).subscribe(events=> this.events = events)
    }

    eventTimesChanged({
      event,
      newStart,
      newEnd,
    }: CalendarEventTimesChangedEvent): void {
      console.log('the event that is being changed: ', event)
      console.log('the new start date: ', newStart)
      console.log('the new end date: ', newEnd)
      event.start = newStart;
      event.end = newEnd;
      this.refresh.next();
    }


}