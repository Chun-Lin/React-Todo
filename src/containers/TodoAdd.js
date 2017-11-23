import React, { Component } from 'react'
import { handleServerItemAdd } from '../request'
import '../style/TodoAdd.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions/index'

class TodoAdd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoTitle: '',
    }
  }

  handleChange = keyword => evt => {
    this.setState({ [keyword]: evt.target.value })
  }

  handleAddKeyDown = event => {
    event.keyCode === 13 ? this.props.addTodo(this.state.todoTitle) : null
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
        <button
          className="add-button"
          onClick={() => this.props.addTodo(this.state.todoTitle)}
        >
          +
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoAdd)
