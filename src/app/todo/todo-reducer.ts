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