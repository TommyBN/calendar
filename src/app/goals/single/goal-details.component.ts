import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Goal } from '../Goal';
import { GoalsService } from '../goals.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/goals.state';
import { getGoals } from '../state/goals.reducer';

@Component({
    templateUrl:'./goal-details.component.html'
})
export class GoalDetailsComponent implements OnInit{

    currentGoal: Goal;
    currentID: number;
    goals: Goal[];

    constructor( 
        private router:Router, 
        private route: ActivatedRoute,
        private goalsService: GoalsService,
        private store: Store<AppState>
    ){}

    ngOnInit(){
        this.route.paramMap.subscribe(params => {
            let id = +params.get('id');
            this.store.pipe(select(getGoals)).subscribe(
                goals => {
                    console.log(this.currentGoal);
                    this.currentGoal = this.getGoalById(goals, id);
                    console.log(this.currentGoal);
                })
        })
    }

    getGoalById(goals: Goal[], id:number):Goal{
        for(let goal of goals) {
            if(goal.id == id) return goal;
        }
        for(let goal of goals) {
            return this.getGoalById(goal.secondaryGoals, id)
        }
    }

    goToGoal(id:number){
        /* trial 1*/ this.router.navigate(['/goals', id])
    }
}