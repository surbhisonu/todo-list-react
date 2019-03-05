import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

class TodoList extends React.Component {
constructor () {
  super();
  console.log("constructor");
  this.changeState = this.changeState.bind(this)
  this.updateTask = this.updateTask.bind(this)
  this.addTask = this.addTask.bind(this)
  this.deleteTask = this.deleteTask.bind(this)
  this.editTask = this.editTask.bind(this)
  this.state = {
   tasks: [ ],
  currentTask : ''
  }; 
}
changeState() {
  var tasks = this.state.tasks;
  this.setState({
    tasks : tasks
  })
}

addTask(evt) {
  evt.preventDefault();
  let tasks = this.state.tasks;
  let currentTask = this.state.currentTask;
  tasks.push ({
    name:currentTask,
    completed : false
  })
  this.setState ( {
    tasks,
    currentTask : ''
  })
}

deleteTask(index) {
  console.log(index)
  let tasks = this.state.tasks;
  tasks.splice(index, 1)
  this.setState({
    tasks
  })
}

updateTask(newValue) {
 this.setState({
  currentTask:newValue.target.value
 })
}

editTask(index, newValue) {
  console.log(index, newValue)
  var tasks = this.state.tasks;
  var task = tasks[index];  
  task['name'] = newValue;
  this.setState({
    tasks
  })
}
componentWillMount() {
  console.log("will mount")
}

componentDidMount() {
  console.log("did mount")
}
  render() {
    console.log("rendering")
    return (
     <section>
       <TodoForm
          currentTask = {this.state.currentTask}
          updateTask = {this.updateTask}
          addTask = {this.addTask}
       />
        <ul>
         {
          this.state.tasks.map((task, index)=> {
            return <TodoItem 
              className="todolist"
              key={task.name} 
              clickHandler={this.changeState} 
              index= {index}
              deleteTask = {this.deleteTask}
              editTask = {this.editTask}
              details= {task} 
            />
          })
        }         
      </ul>
     </section>
    );
  }
}

ReactDOM.render(<TodoList/>, document.getElementById('root'));