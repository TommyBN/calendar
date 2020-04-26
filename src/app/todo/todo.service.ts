import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Todo';

@Injectable()
export class TodoService{

    private url = 'http://localhost:8080/todos';


    constructor ( private http:HttpClient) {}

    getAllTodos():Observable<Todo[]>{
        return <Observable<Todo[]>>this.http.get(this.url)
    }

    addTodo(todo:Todo):Observable<any>{
        return <Observable<any>>this.http.post(`${this.url}/new`, todo, { responseType: 'text'})
    }

}