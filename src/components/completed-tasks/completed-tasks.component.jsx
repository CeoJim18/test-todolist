import React,{Fragment} from 'react';

class CompletedTasks extends React.Component{
  constructor(props){
    super(props);
    this.state={
CompletedTasks:this.props.taskList.filter((task)=>{
  return task.completed===true
})
    }

  }
  
render(){

  
  return(
    <Fragment>
    <div>
    <ul>
    {this.state.CompletedTasks.map((taskObject,index) =>(
         <li key={index}>{taskObject.task}</li>
    ))

    }
    </ul>
    </div>
    </Fragment>
  )
}

}


export default CompletedTasks;
