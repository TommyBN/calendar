import { AsyncAction } from "rxjs/internal/scheduler/AsyncAction";



export function user(state, action) {
    switch (action.type) {
        case 'set-user':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export function events(state, action) {
    switch (action.type) {
        case 'set-events':
            return action.payload;
        case 'add-event':
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export function todos(state, action) {
    switch (action.type) {
        case 'set-todos':
            return {
                ...state,
                todos: action.payload
            }
        default: return state;

    }
}

export function goals(state, action) {
    switch (action.type) {
        case 'set-goals':
            return {
                ...state,
                goals: action.payload
            }
        case 'current-goal':
            return {
                ...state,
                currentGaol: action.payload
            }
        default: return state;
        }
}