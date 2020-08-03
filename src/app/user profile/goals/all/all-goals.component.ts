import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service';
import { Goal } from '../Goal';
import { Store } from '@ngrx/store';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-goals',
    templateUrl: 'all-goals.component.html',
    styleUrls: ['../goals.css']
})
export class AllGoalsComponent implements OnInit {

    userGoals: Goal[] = [];
    currentGoalIndex: number;
    showAddGoal: boolean = false;

    constructor(
        private store: Store<any>,
        private goalsService: GoalsService,
        private userService: UserService,
    ) { }


    ngOnInit() {
        this.goalsService.getUserGoals(this.userService.userId).subscribe(goals => {
            this.userGoals = goals;
            this.goalsService.setGoalsInStore(goals);
        })
    }

    saveGoal(goal: Goal) {
        this.goalsService.addGoal(goal).subscribe(goal=> {
            window.alert('goal saved: '+goal);
            this.ngOnInit();
        })
    }


    open(i) {
        this.currentGoalIndex = this.currentGoalIndex == i ? -1 : i
    }

    toggleAddGoal() {
        this.showAddGoal = !this.showAddGoal
    }



}