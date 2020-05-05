import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from './Todo';
import { Store, select } from '@ngrx/store';


@Injectable()
export class TodoService{

    private url = 'http://localhost:8080/todos';


    constructor ( 
        private http:HttpClient,
        private store: Store<any>) {}

    getAllTodos():Observable<Todo[]>{
        return <Observable<Todo[]>>this.http.get(this.url)
    }

    addTodo(todo):Observable<any>{
        todo.event = {
                title: todo.title,
                color: 'yellow',
                start: todo.start,
                draggable: true
                }
        return <Observable<any>>this.http.post(`${this.url}/new`, todo, { responseType: 'text'})
    }


}