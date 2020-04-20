import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

const initialState: AppState = {
    is: true
}

// const getGoalsFeature = createFeatureSelector<GoalsState>('goals');

// export const getGoals = createSelector(getGoalsFeature, goalsState => goalsState.goals );

export function appReducer(state = initialState, action){
        return state;

    }
   
