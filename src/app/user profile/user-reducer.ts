
export function userReducer(state, action){
    switch(action.type){
        case 'set-user':
            return {
                ...state,
                currentUser: action.payload
            }
        default:  
            return state;

    }
}