import { GoalsActionTypes, GoalsAction, GoalsState } from "./goals.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const initialState: GoalsState = {
    goals: []
}

const getGoalsFeature = createFeatureSelector<GoalsState>('goals');

export const getGoals = createSelector(getGoalsFeature, goalsState => goalsState.goals );

export function goalsReducer(state = initialState, action: GoalsAction): GoalsState{
    switch (action.type){
        case GoalsActionTypes.setGoals: 
        return {
            ...state,
            goals: action.payload
    
        }

    }
   
}