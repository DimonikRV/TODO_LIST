import * as tasksGateway from './tasks.gateway';
import { tasksListSelector } from './tasks.selectors';

export const ADD_TASK = 'TASKS/ADD_TASK';
export const RENDER = 'TASKS/RENDER';
export const REPLACE_TASK = 'TASK/REPLACE_TASK';
export const TYPING = 'TASKS_INPUT/TYPING';

export const publishingTask = () => {
  return {
    type: ADD_TASK,
  };
};

export const replaceTaskByNew = newTask => {
  return {
    type: REPLACE_TASK,
    payload: {
      newTask,
    },
  };
};

export const textChange = event => {
  return {
    type: TYPING,
    payload: event.target.value,
  };
};

export const renderData = tasksData => {
  return {
    type: RENDER,
    payload: {
      tasksData,
    },
  };
};

export const getTasks = () => {
  return async dispatch => {
    try {
      const taskData = await tasksGateway.fetchingTasks();
      dispatch(renderData(taskData));
    } catch (error) {
      alert(error.message);
    }
  };
};

export const createTask = text => {
  return async dispatch => {
    const newTask = {
      text,
      done: false,
      createdAT: new Date().toISOString(),
    };
    dispatch(publishingTask());
    try {
      const response = await tasksGateway.postTask(newTask);
      if (response.ok) {
        dispatch(getTasks());
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const toggleTask = id => {
  return async (dispatch, getState) => {
    try {
      const tasksList = tasksListSelector(getState());
      const task = tasksList.find(task => task.id === id);
      const updatedTask = {
        ...task,
        done: !task.done,
      };
      const response = await tasksGateway.updateTask(id, updatedTask);
      if (response.ok) {
        const task = await response.json();
        dispatch(replaceTaskByNew(task));
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

export const removeTask = id => {
  return async dispatch => {
    try {
      const response = await tasksGateway.deleteTask(id);
      if (response.ok) {
        dispatch(getTasks());
      }
    } catch (error) {
      alert(error.message);
    }
  };
};

// export const addingTask = id => {
//   return {
//     type: ADD_TASK,
//   };
// };

// export const removeTask = id => {
//   return {
//     type: DELETE_TASK,
//     payload: {
//       id,
//     },
//   };
// };
