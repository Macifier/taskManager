import React, { useState } from "react";
import classes from "./AddTask.module.css";
import { connect } from "react-redux";
import { addTask } from "../../containers/TasksList/store/actions/index";
const AddTask = (props) => {
  const [text, setText] = useState("");
  const addTask = () => {
    let newTask = {
      text: text,
      completed: false,
    };
    props.addTask(newTask);
    setText("");
  };
  return (
    <div className={classes.Container}>
      <input
        onChange={(event) => setText(event.target.value)}
        value={text}
        type="text"
        className={classes.TaskInput}
        placeholder="Add Task"
      />
      <button
        disabled={text.trim() === ""}
        onClick={addTask}
        className={["btn btn-primary btn-lg", classes.AddButton].join(" ")}
      >
        {" "}
        Send{" "}
      </button>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (data) => dispatch(addTask(data)),
  };
};
export default connect(null, mapDispatchToProps)(AddTask);
