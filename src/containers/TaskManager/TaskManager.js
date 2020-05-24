import React, { PureComponent } from "react";
import TasksList from "../TasksList/TasksList";
import AddTask from "../../components/AddTask/AddTask";
import classes from "./TaskManager.module.css";
class TaskManager extends PureComponent {
  render() {
    return (
      <div className={classes.Container}>
        <h2 className={classes.Heading}> Manage Your Tasks </h2>
        <AddTask />
        <TasksList />
      </div>
    );
  }
}
export default TaskManager;
