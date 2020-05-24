import React from "react";
import classes from "./TasksList.module.css";
import { connect } from "react-redux";
import { taskCompleted, deleteTask } from "./store/actions/index";
const TasksList = (props) => {
  const deleteTask = (event, index) => {
    event.stopPropagation();
    props.deleteTask(index);
  };
  const getTasks = () => {
    return props.tasks.map((task, index) => {
      let spanclasses = [];
      if (task.completed) {
        spanclasses = [classes.Completed];
      }
      return (
        <div
          onClick={() => props.taskCompleted(index)}
          key={index}
          className={classes.Task}
        >
          <span className={spanclasses.join(" ")}> {task.text} </span>
          <img
            alt="Delete Icon"
            onClick={(event) => deleteTask(event, index)}
            src="/cross.svg"
            className={classes.DeleteIcon}
          />
        </div>
      );
    });
  };
  return <div className={classes.Container}>{getTasks()}</div>;
};
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskCompleted: (data) => dispatch(taskCompleted(data)),
    deleteTask: (data) => dispatch(deleteTask(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
