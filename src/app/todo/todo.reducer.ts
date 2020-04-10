export function taskReducer(state, action){
    switch(action.type){
        case 'TASKS_BUTTON_COLOR':
            console.log('existing state: ' +JSON.stringify(state));
            console.log('payload: ' +action.payload);
            return {
                ...state,
                buttonColor: action.payload
            }
        default: 
            return state;

    }
}