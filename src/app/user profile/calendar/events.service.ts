import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goals/Goal';
import { Store } from '@ngrx/store';
import { UserService } from '../user.service';
import { CalendarEvent } from 'angular-calendar';
import { Todo } from '../todo/todo.service';

@Injectable() export class EventsService {

    private url = 'http://localhost:8080/events';
    public currentGoal: Goal;
    private event:CalendarEvent = {title: '', start: new Date()}


    constructor(
        private http: HttpClient,
        private store: Store<any>,
        private userService: UserService) { }

    saveEvent(body):Observable<string> {
        this.store.dispatch({
            type: 'add-event',
            payload: body
        })
        return this.http.post(`${this.url}/new`, body, { responseType: 'text' });
    }

    createEventFromTodo(todo: Todo) {

    }

    getGoalEvent(event_id):Observable<CalendarEvent> {
        return <Observable<CalendarEvent>> this.http.get(`${this.url}/${event_id}`);
    }
}