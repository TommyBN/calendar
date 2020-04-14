import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoService } from '../todo.service';

@Component({
    templateUrl: './all-todos.component.html',
    styles: [`
    .container{
        padding:5%;
        text-align: right;
    }
    .general-buttons{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .main{
        padding:5%;
        display: flex;
        flex-direction: column;
    }

    *{ direction:rtl}
    `]
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