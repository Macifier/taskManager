import * as actions from "../actions/actionTypes";
const initialState = {
  tasks: [],
};
const tasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TASK_COMPLETED:
      return {
        ...state,
        tasks: state.tasks.map((task, index) => {
          if (index !== action.value) {
            return task;
          }
          let updatedTask = { ...task };
          updatedTask.completed = !task.completed;
          return updatedTask;
        }),
      };
    case actions.ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.value),
      };
    case actions.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.value),
      };
    default:
      return state;
  }
};
export default tasksListReducer;
