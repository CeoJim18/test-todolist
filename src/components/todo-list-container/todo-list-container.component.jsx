import React, { Fragment } from "react";
import TotalTasks from "../total-tasks/total-tasks.component";

import CompletedTasks from "../completed-tasks/completed-tasks.component";
import "./todo-list-container.styles.css";

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      taskList: [],
      addingTask:false,
      
      showCompletedTasks: false,
    };
    this.handleChange = this.handleChange.bind(this);

    this.addTask = this.addTask.bind(this);


    this.switchTasksList = this.switchTasksList.bind(this);
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({ currentTask: value });
    //TODO bovenste method proberen weg te werken, omdat het ervoor zorgt dat er bij elke keyboard klik in de input field alles rendered 

  };

  
  //to add a task to the list containing all tasks
  addTask=(event)=> {
    const { taskList } = this.state;
    event.preventDefault();
    const taskValue=event.target[0].value;


    if (taskValue.length === 0) {
      console.log("TASK CANNOT BE EMPTY");
    } else {
      this.setState({ taskList: [...taskList, {task:taskValue,completed:false}] });
      event.target[0].value='';
    }


    //
   
    //this.setState({addingTask:true})
   
  }

  //To switch between the 1. list containing all tasks and 2. the list containing only completed tasks 
  switchTasksList = () => {
    const { showCompletedTasks } = this.state;
    this.setState({ showCompletedTasks: !showCompletedTasks });
  };

  //to change the completed property in an element of the taskList. This element is specified with its index.
  changeCompletedState=(someIndex)=>{
    const {taskList}=this.state;
    const cacheList=taskList;
    cacheList[someIndex].completed=!cacheList[someIndex].completed
    this.setState({taskList:cacheList})
  }
  render() {
    return (
      <Fragment>
        <div className="todo-app-container">
          Todo List
          <form onSubmit={this.addTask}>
          <input
            onChange={this.handleChange}
            style={{ height: "20px", width: "300px" }}
          />
          <input
            type='submit'
            style={{ height: "20px", width: "50px" }}
          />
          </form>
          <button
            onClick={this.switchTasksList}
            style={{ height: "20px", width: "50px" }}
          ></button>
          {this.state.showCompletedTasks ? (
            <CompletedTasks taskList={this.state.taskList} />
          ) : (
            <TotalTasks
            
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
