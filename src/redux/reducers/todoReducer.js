import { GET_ALL_TODOS } from "../actions/todoAction";

const initState = {
  todos: []
};

const todosReducer = (state = initState, action) => {

  if (action.type === GET_ALL_TODOS) {
    return {
      ...state,
      todos: action.payload
    };
  }

  return state;

};

export default todosReducer;
