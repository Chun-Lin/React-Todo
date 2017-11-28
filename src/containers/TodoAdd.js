import React, { Component } from 'react'
import '../style/TodoAdd.css'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import store from '../store/store'

class TodoAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '0',
      todoTitle: '',
    }
  }

  handleChange = keyword => evt => {
    this.setState({ [keyword]: evt.target.value })
  }

  handleAddKeyDown = event => {
    const todosLength = store.getState().todos.length
    if (
      event.keyCode === 13 &&
      this.state.todoTitle !== '' &&
      todosLength > 0
    ) {
      this.props.addTodo(
        store.getState().todos[todosLength - 1].id,
        this.state.todoTitle,
      )
    } else if (event.keyCode === 13 && this.state.todoTitle !== '') {
      this.props.addTodo(this.state.id, this.state.todoTitle)
    }
  }

  handleAddButton = event => {
    const todosLength = store.getState().todos.length
    if (this.state.todoTitle !== '' && todosLength > 0) {
      this.props.addTodo(
        store.getState().todos[todosLength - 1].id,
        this.state.todoTitle,
      )
    } else if (this.state.todoTitle !== '') {
      this.props.addTodo(this.state.id, this.state.todoTitle)
    }
  }

  render = () => {
    return (
      <div className="add-todo">
        <input
          className="add-input"
          placeholder="Add Your Todos Here!!"
          value={this.state.todoTitle}
          onChange={this.handleChange('todoTitle')}
          onKeyDown={this.handleAddKeyDown}
        />
        <button className="add-button" onClick={this.handleAddButton}>
          +
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addTodo,
}

export default connect(null, mapDispatchToProps)(TodoAdd)
