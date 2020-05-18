import { CalendarEvent } from "angular-calendar";

export interface Goal {
        id: number; 
        path: string; 
        title: string; 
        description: string; 
        event: CalendarEvent; 
        secondaryGoals: Goal[]
    
}

export function goals(state, action){
    switch(action.type){
        case 'set-goals':
            return {
                ...state,
                goals: action.payload
            }
        default:  
            return state;

    }
}
