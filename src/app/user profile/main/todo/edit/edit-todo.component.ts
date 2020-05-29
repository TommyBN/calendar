import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService, Todo } from '../Todo';
import { CalendarEvent } from 'angular-calendar';
import { UserService } from 'src/app/user profile/User';
import * as moment from 'moment';
import { format } from 'url';

@Component({
    selector: 'app-add-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['../../../../form.css']
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

    constructor(private userService: UserService) { }

    ngOnInit() { }

    async onSubmit() {
        this.newTodoEvent.start = await moment(this.newTodoEndDate).toDate();
        this.newTodo = {
            user_id: this.userService.userId,
            title: this.newTodoTitle,
            event: this.newTodoEvent
        }
        this.emitTodo.emit(this.newTodo);
    }

}
