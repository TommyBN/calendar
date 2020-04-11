import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Todo } from 'src/app/models';
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

    ngOnInit(){
        // this.store.pipe(select('todo')).subscribe((todoState)=> {
        //     if(odoState) this.allTodos = taskState.buttonColor
        // })
        this.todoService.getAllTodos().subscribe(todos => {
            this.allTodos = todos;
            // console.log('all todos: ', todos)
            console.log('all todos: ', this.allTodos)
        })
    }


    changeColor(){
        // this.store.dispatch({
        //     type: "TASKS_BUTTON_COLOR", //action type
        //     payload: this.color //action payload
        // });

        // this.store.subscribe(state=>{
        //     this.booly = !state.general;
        //     this.color = state.tasks.buttonColor
        // })
    }

}