import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
    template: `
        <a [routerLink]="['',1]">1</a>
        <a [routerLink]="['/2']">2</a>
        <a [routerLink]="['/3']">3</a>
        <a [routerLink]="['/3']">3</a>
        <a [routerLink]="['/4']">4</a>
    `,
    // templateUrl:'./all-tasks.component.html',
    styles: [`
       
    `]
})
export class AllTodosComponent implements OnInit{

    constructor(private store:Store<any>){}


    ngOnInit(){
        // this.store.pipe(select('tasks')).subscribe((taskState)=> {
        //     if(taskState) this.color = taskState.buttonColor
        // })  
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