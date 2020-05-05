export function appReducer(state, action){
    switch (action.type){
        case "add-todo":
            state.todos.push(action.payload);
            return state;
    }
}
   
