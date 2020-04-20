import { Injectable } from '@angular/core';
import { GoalsModule } from './goals.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Goal } from './Goal';

@Injectable({
    providedIn: GoalsModule
})
export class GoalsService{

    private url = 'http://localhost:8080/goals';


    constructor ( private http:HttpClient) {}

    getAll():Observable<Goal[]>{
        return <Observable<Goal[]>>this.http.get(`${this.url}/all`)
    }

    // getSingleTodo():Observable<any>{

    // }

}