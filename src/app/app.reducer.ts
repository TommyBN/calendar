export function appReducer(state, action){
    switch(action.type){
        case 'some-creaping-shit':
            console.log('existing state: ' +JSON.stringify(state));
            console.log('payload: ' +action.payload);
            return {
                ...state,
                general: action.payload
            }
        default: 
            return state;

    }
}