import { Goal } from "../models";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-goal',
    template:`
        {{goal.title}}
    `
})
export class GoalComponent{
    @Input() goal: Goal;
}