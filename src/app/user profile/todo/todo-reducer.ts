// import { Todo } from "../models";
// import * as fromRoot from '../state/app.state';

// export interface TodoState{
//     todos: Todo[];
//     isEdit: boolean;
//     numOfMissions: number;
// }


export function todoReducer(state, action){
    switch(action.type){
        case 'set-todos':
            return {
                ...state,
                todos: action.payload
            }
        default:  
            return state;

    }
}