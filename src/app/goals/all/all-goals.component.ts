import {Component, OnInit} from '@angular/core';
import { GoalsService } from '../goals.service';
import { Goal } from '../Goal';
import { Store } from '@ngrx/store';

@Component({
    selector: 'all-goals-component',
    templateUrl: 'all-goals.component.html',
    styleUrls:['../../section.css']
})
export class AllGoalsComponent implements OnInit{

    goals: Goal[];

    constructor ( 
        private goalsService: GoalsService, 
        private store:Store<any>,
    ) {}

    ngOnInit(){
     this.setGoals();
    }

    setGoals(){
        this.goalsService.getAll().subscribe(goals => {
            this.goals = goals;
        });
    }

    



}