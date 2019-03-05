import React from 'react';
import PropTypes from 'prop-types';
const TodoForm = (props) => {
  return (
   <div className="todo-form">
      <h3>ToDo List</h3>
      <form onSubmit={props.addTask}>
      <input type="text" className="todoinput"
        placeholder="write something"
        value={props.currentTask} 
        onChange={props.updateTask}
      />
      <button  className = "btn" type="submit">Submit</button>
      </form>
   </div>
  )
}
TodoForm.prototype = {
  addTask:PropTypes.func,
  currentTask:PropTypes.string,
  updateTask: PropTypes.func
}
export default TodoForm;