// import { Todo } from "../models";
// import * as fromRoot from '../state/app.state';

// export interface State extends fromRoot.appState{
//     todos: TodoState;
// }

// export interface TodoState{
//     todos: Todo[];
//     isEdit: boolean;
//     numOfMissions: number;
// }

// const initState:TodoState = {
//     todos: [],
//     isEdit: false,
//     numOfMissions: 0
// }

export function todoReducer(state, action){
    console.log('exisad: ', action.payload)
    switch(action.type){
        case 'add-mission':
            return {
                ...state,
                numOfMissions: action.payload
            }
        default:  
            return state;

    }
}