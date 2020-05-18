import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../Goal';

@Component({
    selector: 'app-goal',
    templateUrl:'./goal-details.component.html',
    styleUrls: ['../../../section.css']
})
export class GoalDetailsComponent implements OnInit{

    @Input() goal: Goal;
    @Input() secondaryGoals: Goal[];
    visible:boolean = false;

    constructor(){}

    ngOnInit(){}

    toggleContent(){
        this.visible = !this.visible
    }


    // getGoalById(goals: Goal[], id:number):Goal{
    //     for(let goal of goals) {
    //         if(goal.id == id) return goal;
    //     }
    //     for(let goal of goals) {
    //         return this.getGoalById(goal.secondaryGoals, id)
    //     }
    // }

}