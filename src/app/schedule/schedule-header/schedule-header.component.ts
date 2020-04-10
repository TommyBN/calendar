import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';


@Component({
  selector: 'app-schedule-header',
  templateUrl: './schedule-header.component.html',
  styles:[
    `
    .fa-arrow-alt-circle-left, .fa-arrow-alt-circle-right{
      font-size: 20px;
      margin: 8%;
    }
    `
  ]
})
export class ScheduleHeaderComponent   {

  @Input() view: CalendarView | 'month' | 'week' | 'day';

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

}
