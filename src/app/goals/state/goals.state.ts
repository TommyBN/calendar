import { Goal } from "../Goal";
import * as fromRoot from '../../state/app.state';
import { Action } from "@ngrx/store";

export interface AppState extends fromRoot.AppState{
    goals:GoalsState;
}

export interface GoalsState {
    goals: Goal[];
}

export enum GoalsActionTypes {
    setGoals = '[Goals] set goals'
}

export class SetGoals implements Action {
    readonly type = GoalsActionTypes.setGoals;

    constructor(public payload: Goal[]){}
}

export type GoalsAction = SetGoals;



