import { Injectable } from '@angular/core';
import { TodoModule } from './todo.module';
// import { Todo } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService{


    constructor ( private http:HttpClient) {}

    getAllTodos():Observable<any>{
        return this.http.get('./assets/todos.json')
    }

    // getSingleTodo():Observable<any>{

    // }

}