import * as actions from "./actionTypes";
export const addTask = (value) => {
  return {
    type: actions.ADD_TASK,
    value: value,
  };
};
export const deleteTask = (value) => {
  return {
    type: actions.DELETE_TASK,
    value: value,
  };
};
export const taskCompleted = (value) => {
  return {
    type: actions.TASK_COMPLETED,
    value: value,
  };
};
