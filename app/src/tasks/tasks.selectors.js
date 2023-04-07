export const tasksListSelector = state => {
  const taskList = state.tasksList.tasks;
  return taskList.slice().sort((a, b) => a.done - b.done);
};

export const inputTextSelector = state => {
  return state.tasksList.inputText;
};
