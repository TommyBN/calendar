import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Todo } from 'src/app/models';
import { TodoService } from '../todo.service';

@Component({
    template: `
        <h1> משימות כלליות </h1>
        <div *ngFor="let todo of allTodos" [routerLink]="['/todos', 'todo.id']"
        <div [routerLink]="['/todos', '1']">2</div>
        <div [routerLink]="['/todos', '3']">3</div>
        <div [routerLink]="['/todos', '4']">4</div>
        <div [routerLink]="['/todos', '5']">5</div>
        <div [routerLink]="['/todos', '6']">6</div>
    `,
    // templateUrl:'./all-tasks.component.html',
    styles: [`
       
    `]
})
export class AllTodosComponent implements OnInit{

    constructor ( private store:Store<any>, private todoService:TodoService ){}

    allTodos:any[];//Todo

    ngOnInit(){
        // this.store.pipe(select('todo')).subscribe((todoState)=> {
        //     if(odoState) this.allTodos = taskState.buttonColor
        // })
        this.todoService.getAllTodos().subscribe(todos => this.allTodos = todos);

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