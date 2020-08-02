import { CalendarEvent } from "angular-calendar";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { UserService } from "../user.service";

export interface Todo {
    user_id: string,
    title: string,
    event_id: string,
}

@Injectable()
export class TodoService{

    private url = 'http://localhost:8080/todos';
    public newTodo:any;

    constructor ( 
        private http:HttpClient,
        private store: Store<any>,
        private userService: UserService) {}

    getUserTodos(id): Observable<Todo[]>{
        return <Observable<Todo[]>>this.http.get(`${this.url}?id=${id}`);
    }

    setTodosInStore(todos:Todo[]){
        this.store.dispatch({
            type: "set-todos",
            payload: todos
        })
    }

    async addTodo(todo){
        todo.event = {
            user_id: this.userService.userId,
            title: todo.title,
            color: 'yellow',
            start: todo.event.start,
            draggable: true
        }
        let body = {
            todo: todo,
            userId: this.userService.userId
        }

        await this.http.post(`${this.url}/new`, body,).subscribe(newTodo=>{
            console.log(newTodo)
            return newTodo
        })
    }



    updateTodo(id, newTitle){
        this.http.get(`${this.url}/${id}/${newTitle}`).subscribe(updatedTodo=>{
            console.log(updatedTodo);
        })
    }

    deleteTodo(todoId){
        this.http.delete(`${this.url}/${todoId}`).subscribe(message=> console.log(message))
    }

}