import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../Goal';

@Component({
    selector: 'app-goal',
    templateUrl:'./goal-details.component.html',
    styleUrls: ['../../../../section.css']
})
export class GoalDetailsComponent implements OnInit{

    @Input() goal: Goal;
    @Input() subGoals: Goal[];
    currentSubGoal:number;
    showEditGoal:boolean = false;
    editButtonText:string = 'הוסף מטרת משנה';

    constructor(){}

    ngOnInit(){
        console.log('goal: ',this.goal)
    }
    
    open(i){
        // console.log(this)
        this.currentSubGoal = this.currentSubGoal == i ? -1 : i
        // this.currentSubGoal = i
    }

    toggleEditForm(){
        this.showEditGoal = !this.showEditGoal;
        this.editButtonText = this.editButtonText == 'סגור' ? 'הוסף מטרת משנה' : 'סגור'
    }

}