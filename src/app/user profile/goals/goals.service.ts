import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from './Goal';
import { Store } from '@ngrx/store';
import { UserService } from '../user.service';
import { EventsService } from '../calendar/events.service';
import { Todo } from '../todo/todo.service';

@Injectable() export class GoalsService{

  private url = 'http://localhost:8080/goals';
  public currentGoal:Goal;


    constructor ( 
        private http:HttpClient,
        private store: Store<any>,
        private userService: UserService,
        private eventsService: EventsService) {}

    getUserGoals(id): Observable<Goal[]>{
        return <Observable<Goal[]>>this.http.get(`${this.url}?id=${id}`);
    }

    setGoalsInStore(goals:Goal[]){
        this.store.dispatch({
            type: "set-goals",
            payload: goals
        })
    }

    async addGoal(goal:Goal){
        let body = {
            goal: goal,
            userId: this.userService.userId
        }

        this.http.post(`${this.url}/new`, body, { responseType: 'text'})
        .subscribe(message=> console.log(message))
    }

    async addTodoToGoal(todo, goalId: string){
        todo.event = {
            user_id: this.userService.userId,
            title: todo.title,
            color: 'yellow',
            start: todo.event.start,
            draggable: true
        }
        console.log('todo: ',todo)
        let body = {
            type: 'todo',
            todo: todo,
            userId: this.userService.userId
        }
        // console.log('goal id: ',goalId)
        await this.http.post(`${this.url}/${goalId}`, body,).subscribe(response=>{
            console.log('response: ',response)
        })
    }

    async addSubGoal(goal, goalId: string){
        let body = {
            type: 'goal',
            goal: goal,
            userId: this.userService.userId
        }

        await this.http.post(`${this.url}/${goalId}`, body,).subscribe(response=>{
            console.log('response: ',response)
        })
    }
  
}