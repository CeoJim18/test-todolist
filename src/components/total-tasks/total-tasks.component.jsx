import React, { Fragment } from "react";
import IndividualTask from "../individual-task/individual-task.component";
import "./total-tasks.styles.scss";

class TotalTasks extends React.Component {
  constructor(props) {
    super(props);
  this.state={}
    
  }
 
  render() {

  
    return (
      
      <Fragment>
        <div className="tasks-holder">
        <ul style={{listStyle:"none"}}>
         {this.props.allTasks.map((taskobject,index)=>
          
        {
          return(
          <IndividualTask addCompletedTasks={this.props.addCompletedTasks} changeCompletedState={this.props.changeCompletedState} removeFromCompletedList={this.props.removeFromCompletedList} completed={taskobject.completed} task={taskobject.task} unKey={index}/>
         )
        })
        }
         </ul>
        </div>
       
     </Fragment>
    );
  }
}

export default TotalTasks;
