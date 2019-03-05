import React from 'react';
import PropTypes from 'prop-types';
class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }
    this.renderForm = this.renderForm.bind(this)
    this.renderItem = this.renderItem.bind(this)
    this.toggleState = this.toggleState.bind(this)
    this.updateItem = this.updateItem.bind(this)
  }

  updateItem(evt) {
    evt.preventDefault()
    console.log(this.input.value)
    this.props.editTask(this.props.index,this.input.value)
    this.toggleState();
  }

  renderForm() {
    return (
      <form onSubmit={this.updateItem}>
        <input type= "text" ref={(value) => {
          this.input = value
        }} defaultValue={this.props.details.name}
        className="todoinput"/>
        <button className = "btn" type="submit">Update Item</button>
      </form> 
    )
  }

  toggleState() {
    const isEditing = this.state.isEditing;
    this.setState({
      isEditing: !isEditing
    })
  }

  renderItem() {
    return (
      <div onClick= { ()=> {
        this.props.clickHandler(this.props.index);
      }} className= {this.props.details.complated ? 'completed' : '' }>
      {this.props.details.name}
      <div className="btn-wrapper">
        <button onClick={(evt) => {
          evt.isPropagationStopped()
          this.props.deleteTask(this.props.index)
        }} className = "btndelete">
          Delete
        </button>
        <button onClick={(evt) => {
          evt.isPropagationStopped()
          this.toggleState()
        }} className = "btnedit">
          Edit
        </button>
      </div>
      </div> 
    )
  }

  render() {
    const isEditing = this.state.isEditing;
    return (
      <section>
        {
          isEditing ? this.renderForm() : this.renderItem()  
        }
      </section>
    )
  }
}

TodoItem.propTypes = {
  clickHandler: PropTypes.func,
  index: PropTypes.number.isRequired,
  deleteTask : PropTypes.func.isRequired,
  editTask:PropTypes.func.isRequired,
  details: PropTypes.object.isRequired
}

export  default TodoItem;