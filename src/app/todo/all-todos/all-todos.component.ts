import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../todo.service';
import * as fromProduct from '../todo-reducer';

@Component({
    templateUrl: './all-todos.component.html',
    styleUrls: ['../../section.css']
})
export class AllTodosComponent implements OnInit{

    constructor ( private store:Store<any>, private todoService:TodoService ){}

    allTodos:Array<any>;//Todo
    numOfMissions:number;

    ngOnInit(){
       this.store.subscribe(state=>{
            this.numOfMissions = state.numOfMissions;
        });

        this.todoService.getAllTodos().subscribe(todos => {
            this.allTodos = todos;
            // console.log('all todos: ', todos)
            console.log('all todos: ', this.allTodos)
        })
    }

    addTodo(){
        this.store.dispatch({
            type: "add-mission", 
            payload: ++this.numOfMissions
        });
    }


  

}