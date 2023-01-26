import React,{Fragment} from 'react';


import './individual-task.styles.scss';
class IndividualTask extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      taskChecked:false
    };
    this.handleChange = this.handleChange.bind(this);
    

  }
  handleChange = (e) => {
  
    const { checked } = e.target;
    this.setState({taskChecked:checked});
    this.props.changeCompletedState(this.props.unKey)
    if(checked===true){

  this.props.addCompletedTasks(this.props.task)
  
    }
  
    
  };
render(){
  
  return(
  <Fragment>
  <div className='individual-task-container'>
  <input type="checkbox" onChange={this.handleChange}  checked={this.props.completed?true:false} />
  <li className={`task ${this.props.completed?'checked':''}`}  key={this.props.unKey}>{this.props.task}</li>
  </div>
  </Fragment>)
}
}



export default IndividualTask;
