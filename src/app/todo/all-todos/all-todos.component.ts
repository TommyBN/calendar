import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../todo.service';

@Component({
    templateUrl: './all-todos.component.html',
    styleUrls: ['../../section.css']
})
export class AllTodosComponent implements OnInit{

    constructor ( private store:Store<any>, private todoService:TodoService ){}

    allTodos:Array<any>;//Todo
    counter:number = 0;

    ngOnInit(){
       this.store.subscribe(state=>{
            if(state.numOfMissions) this.counter = state.numOfMissions;
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
            payload: ++this.counter
        });
    }


  

}