import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } 
    from 'angular-calendar';
import { colors } from './colors';

@Component({
    selector: 'app-schedule',
    templateUrl:'./schedule.component.html'
})
 
export class  ScheduleComponent {

    view: CalendarView = CalendarView.Month;

    viewDate: Date = new Date();
  
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
    ];
  
    refresh: Subject<any> = new Subject();
  
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