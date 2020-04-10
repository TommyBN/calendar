import {Component, OnInit} from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'all-tasks-component',
    template: `
        <button class="btn btn-success"><a [routerLink]="['/main']"><h3>חזרה</h3></a></button>
        <h1>This is the tasks component speaking</h1>
        <h3> How Are You ? </h3>
        <button  [style.backgroundColor]="color" (click)="changeColor()">Change my color</button>
        // <h2>The color is {{color}}</h2>
    `,
    // templateUrl:'./all-tasks.component.html',
    styles: [`
       
    `]
})
export class AllTasksComponent implements OnInit{

    constructor(private store:Store<any>){}

    color: string = "blue";
    booly:boolean = false;

    ngOnInit(){
        this.store.pipe(select('tasks')).subscribe((taskState)=> {
            if(taskState) this.color = taskState.buttonColor
        })  

        this.store.subscribe((state)=> {
            if(state) this.booly = state.general;
        })  
    }

    changeColor(){
        this.color = this.color == 'blue' ? 'red' : 'blue';
        this.store.dispatch({
            type: "TASKS_BUTTON_COLOR", //action type
            payload: this.color //action payload
        });

        this.store.dispatch({type: "some-creaping-shit", payload: !this.booly})
        // this.store.pipe(select('tasks')).subscribe((state)=> {
        //     // console.log('state: ',state)
        //     this.color = state.buttonColor
        // });
        this.store.subscribe(state=>{
            this.booly = !state.general;
            this.color = state.tasks.buttonColor
        })
    }

}