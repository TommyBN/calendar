import { CalendarEvent } from "angular-calendar";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';

export interface Todo {
    _id: string,
    title: string,
    path: string,
    description: string,
    event: CalendarEvent,
    secondaryTodos: Todo[]
}


export function todos(state, action){
    switch(action.type){
        case 'set-todos':
            return {
                ...state,
                todos: action.payload
            }
        default:  
            return state;

    }
}

@Injectable()
export class TodoService{

    private url = 'http://localhost:8080/todos';


    constructor ( 
        private http:HttpClient,
        private store: Store<any>) {}

    getAllTodos(): Observable<Todo[]>{
        return <Observable<Todo[]>>this.http.get(this.url);
    }

    setTodosInStore(todos:Todo[]){
        this.store.dispatch({
            type: "set-todos",
            payload: todos
        })
    }

    async addTodo(todo){
        let id;
        await this.store.select('user').subscribe(
            user=> id = user.currentUser._id
        );
        todo.event = {
            user_id: id,
            title: todo.title,
            color: 'yellow',
            start: todo.start,
            draggable: true
        }
        let body = {
            todo: todo,
            userId: id
        }

        console.log('todo in service: ' ,body)
        this.http.post(
            `${this.url}/new`, body, { responseType: 'text'}
        ).subscribe(message=> console.log(message))
    }


}