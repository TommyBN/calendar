import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Goal } from './Goal';

@Injectable() export class GoalsService{

  private url = 'http://localhost:8080/goals';
  // private httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //       "Access-Control-Allow-Origin": "*"
    //     })
    //   };

    constructor ( private http:HttpClient) {}

    getAll():Observable<Goal[]>{
        return <Observable<Goal[]>>this.http.get(`${this.url}/all`)
    }

    addGoal(goal:Goal):Observable<any>{
        console.log('goal on service: ', goal)
        return <Observable<any>>this.http.post(`${this.url}/new`, goal, {responseType: 'text'})
    }

}