import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from './Goal';
import { Store } from '@ngrx/store';

@Injectable() export class GoalsService{

  private url = 'http://localhost:8080/goals';


    constructor ( 
        private http:HttpClient,
        private store: Store<any>) {}

    getUserGoals(id): Observable<Goal[]>{
        console.log('user id in to service: ',id);    
        return <Observable<Goal[]>>this.http.get(`${this.url}?id=${id}`);
    }

    setGoalsInStore(goals:Goal[]){
        this.store.dispatch({
            type: "set-goals",
            payload: goals
        })
    }

    async addGoal(goal){
        let id;
        await this.store.select('user').subscribe(
            user=> id = user.currentUser._id
        );
        goal.event = {
            user_id: id,
            title: goal.title,
            color: 'yellow',
            start: goal.start,
            draggable: true
        }
        let body = {
            goal: goal,
            userId: id
        }

        console.log('goal in service: ' ,body)
        this.http.post(
            `${this.url}/new`, body, { responseType: 'text'}
        ).subscribe(message=> console.log(message))
    }
  
}