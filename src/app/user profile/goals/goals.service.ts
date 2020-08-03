import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from './Goal';
import { Store } from '@ngrx/store';
import { UserService } from '../user.service';
import { Todo } from '../todo/todo.service';

@Injectable() export class GoalsService{

  private url = 'http://localhost:8080/goals';
  public currentGoal:Goal;


    constructor ( 
        private http:HttpClient,
        private store: Store<any>,
        private userService: UserService,
    ) {}

    getUserGoals(id): Observable<Goal[]>{
        return <Observable<Goal[]>>this.http.get(`${this.url}?id=${id}`);
    }

    setGoalsInStore(goals:Goal[]){
        this.store.dispatch({ type: "set-goals", payload: goals })
    }

    addGoal(goal:Goal): Observable<Goal>{
        let body = { goal: goal, userId: this.userService.userId }
        return <Observable<Goal>>this.http.post(`${this.url}/new`, body);
    }

    addTodoToGoal(todo:Todo, goalId: string): Observable<any>{
        let body = { type: 'todo', todo: todo, userId: this.userService.userId }
        return this.http.post(`${this.url}/${goalId}`, body)
    }

    addSubGoal(subGoal:Goal, goalId: string){
        let body = { type: 'goal', goal: subGoal, userId: this.userService.userId }
        return this.http.post(`${this.url}/${goalId}`, body);
    }
 
    deleteGoal(goalID) {
        return this.http.delete(`${this.url}/${goalID}`)
    }

    
    

}