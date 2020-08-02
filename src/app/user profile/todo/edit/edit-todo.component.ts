import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.service';
import { CalendarEvent } from 'angular-calendar';
import { UserService } from 'src/app/user profile/user.service';
import * as moment from 'moment';
import { EventsService } from '../../calendar/events.service';

@Component({
    selector: 'app-add-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['../../user-forms.css']
})
export class EditTodoComponent implements OnInit {
    
    @Output() emitTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
    private newTodo: Todo;
    private newTodoTitle: string;
    private newTodoEndDate: Date;
    private newTodoEvent: CalendarEvent = {
        title: '',
        start: null,
        draggable: true
    };
    
    constructor(
        private userService: UserService,
        private eventsService: EventsService) { }

    ngOnInit() { }

    async onSubmit() {
        this.newTodo = {
            user_id: this.userService.userId,
            title: this.newTodoTitle,
            event_id: ''
        }
        this.newTodoEvent.start = await moment(this.newTodoEndDate).toDate();
        this.eventsService.saveEvent(this.newTodoEvent).subscribe(
            eventID => {
                this.newTodo.event_id = eventID;  
                this.emitTodo.emit(this.newTodo);
            }
        )
    }

}

