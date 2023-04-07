import { RENDER, TYPING, ADD_TASK, REPLACE_TASK } from './tasks.actions';

const initialState = {
  inputText: '',
  tasks: [],
};

export const tasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPING:
      return {
        ...state,
        inputText: action.payload,
      };
    case RENDER:
      return {
        ...state,
        tasks: action.payload.tasksData,
      };
    case ADD_TASK:
      return {
        ...state,
        inputText: '',
      };
    case REPLACE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.newTask.id ? action.payload.newTask : task,
        ),
      };

    default:
      return state;
  }
};
