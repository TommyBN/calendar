import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';


@Component({
  selector: 'calendar-header',
  templateUrl: './calendar-header.component.html',
  styles:[
    `
    .fa-arrow-alt-circle-left, .fa-arrow-alt-circle-right{
      font-size: 20px;
      margin: 8%;
    }

    .container{
      display: flex;
      flex-direction: row;
    }

    h3{
      font-size: 1.25em;
      text-align: left;
      display: inline-block }

    `
  ]
})
export class CalendarHeaderComponent   {

  @Input() view: CalendarView | 'month' | 'week' | 'day';

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

}
