import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from '../goals/Goal';
import { Store } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';

@Injectable() export class EventsService {

    private url = 'http://localhost:8080/events';
    public currentGoal: Goal;

    constructor(
        private http: HttpClient,
        private store: Store<any>,
    ) { }

    saveEvent(event:CalendarEvent):Observable<any> {
        this.store.dispatch({ type: 'add-event', payload: event })
        return this.http.post(`${this.url}/new`, event);
    }

    getGoalEvent(event_id):Observable<CalendarEvent> {
        return <Observable<CalendarEvent>> this.http.get(`${this.url}/${event_id}`);
    }
}