import { CalendarEvent } from "angular-calendar";

export interface Goal {
        _id?: string,
        user_id: string;
        title: string; 
        event_id: string; 
        subGoals?: Goal[]
    
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
