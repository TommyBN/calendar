import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { GoalsService } from '../goals.service';
import { Goal } from '../Goal';
import { Store } from '@ngrx/store';
import { UserService } from '../../../User';

@Component({
    selector: 'app-goals',
    templateUrl: 'all-goals.component.html',
    styleUrls:['../../../../section.css']
})
export class AllGoalsComponent implements OnInit{

    goals: Goal[];
    currentGoal:number;
    showAddGoal: boolean = false;

    constructor ( private store:Store<any>, 
        private goalsService:GoalsService,
        private userService:UserService,
        private location: Location 
      ){}

userGoals:Goal[] = [{
    id: 0, 
    path: "goals", 
    title: "fake goal", 
    description: "for case...", 
    event: {
        title: 'Draggable event',
        // color: colors.yellow,
        start: new Date(),
        draggable: true,
    }, 
    subGoals: []
}];

ngOnInit(){
this.goalsService.getUserGoals(this.userService.userId).subscribe(goals => {
  this.userGoals = goals;
  this.goalsService.setGoalsInStore(goals);
})
}

back(){
this.location.back()    
}

open(i){
    // console.log(this)
    this.currentGoal = this.currentGoal == i ? -1 : i
    // this.currentGoal = i
}

toggleAddGoal(){
    this.showAddGoal = !this.showAddGoal
}

}