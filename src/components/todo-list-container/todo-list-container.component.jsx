import React, { Fragment } from "react";
import TotalTasks from "../total-tasks/total-tasks.component";

import CompletedTasks from "../completed-tasks/completed-tasks.component";
import "./todo-list-container.styles.css";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTask: "",
      taskList: [],
      completedTasks: [],
      showCompletedTasks: false,
    };
    this.handleChange = this.handleChange.bind(this);

    this.addTask = this.addTask.bind(this);

    this.addCompletedTasks = this.addCompletedTasks.bind(this);

    this.switchView = this.switchView.bind(this);
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ currentTask: value });
  };

  addCompletedTasks = (aCompletedTask) => {
    const { completedTasks } = this.state;
    this.setState({ completedTasks: [...completedTasks, aCompletedTask] });
  };

  removeFromCompletedList = (aTask) => {
    const { completedTasks } = this.state;
    completedTasks.includes(aTask)
      ? this.setState({ completedTasks: completedTasks.pop(aTask) })
      : this.setState({ completedTasks: completedTasks });
  };

  addTask() {
    const { taskList } = this.state;
    if (this.state.currentTask.length === 0) {
      console.log("TASK CANNOT BE EMPTY");
    } else {
      this.setState({ taskList: [...taskList, {task:this.state.currentTask,completed:false}] });
    }
  }

  switchView = () => {
    const { showCompletedTasks } = this.state;
    this.setState({ showCompletedTasks: !showCompletedTasks });
  };

  changeCompletedState=(someIndex)=>{
    const {taskList}=this.state;
    const falseList=taskList;
    falseList[someIndex].completed=!falseList[someIndex].completed
    this.setState({taskList:falseList})
  }
  render() {
    return (
      <Fragment>
        <div className="todo-app-container">
          Todo List
          <input
            onChange={this.handleChange}
            style={{ height: "20px", width: "300px" }}
          />
          <button
            onClick={this.addTask}
            style={{ height: "20px", width: "50px" }}
          ></button>
          <button
            onClick={this.switchView}
            style={{ height: "20px", width: "50px" }}
          ></button>
          {this.state.showCompletedTasks ? (
            <CompletedTasks taskList={this.state.taskList} />
          ) : (
            <TotalTasks
              addCompletedTasks={this.addCompletedTasks}
              removeFromCompletedList={this.removeFromCompletedList}
              allTasks={this.state.taskList}
              changeCompletedState={this.changeCompletedState}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

export default TodoContainer;
