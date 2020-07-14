const INITIAL_STATE = {todos:[]};

function todoReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case "ADD":
      return {...state, todos: [...state.todos, action.payload]};
    
    case "REMOVE":
      return {...state, todos: state.todos.filter(t => t.id !== action.payload)};
    
    default:
      return state;
  }
}

export default todoReducer;

