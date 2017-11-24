import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/TodoListItem.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { delTodo, editTodo } from '../actions/index'

class TodoListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false,
      text: this.props.todo,
    }
  }

  toggleMode = () => {
    this.setState(prevStat => ({
      editMode: !prevStat.editMode,
    }))
  }

  updateText = text => {
    this.setState(prevStat => ({
      text: text,
    }))
  }

  handleEditTodo = (index, todos, todo_title) => {
    this.props.editTodo(index, todos, todo_title)
    this.toggleMode()
  }

  handleEditKeyDown = (index, todos, todo_title, event) => {
    if (event.keyCode === 13) {
      this.handleEditTodo(index, todos, todo_title)
    }
  }

  renderReadModeTodoItem = () => {
    const index = this.props.index
    return (
      <li className="list-item">
        <div className="list-item-title">{this.props.todo}</div>
        <div className="list-buttons">
          <button onClick={this.toggleMode} className="list-buttons edit">
            <i className="fa fa-pencil" aria-hidden="true" />
          </button>
          <button
            onClick={() => this.props.delTodo(index, this.props.todos)}
            className=" list-buttons delete"
          >
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </div>
      </li>
    )
  }

  renderEditModeTodoItem = () => {
    const index = this.props.index
    return (
      <div className="list-item">
        <input
          className="edit-input"
          value={this.state.text}
          onChange={event => this.updateText(event.target.value)}
          onKeyDown={event =>
            this.handleEditKeyDown(
              index,
              this.props.todos,
              this.state.text,
              event,
            )
          }
        />
        <div className="list-buttons">
          <button
            onClick={() =>
              this.handleEditTodo(index, this.props.todos, this.state.text)
            }
            className="list-buttons complete"
          >
            <i className="fa fa-check" aria-hidden="true" />
          </button>
        </div>
      </div>
    )
  }

  render() {
    return this.state.editMode
      ? this.renderEditModeTodoItem()
      : this.renderReadModeTodoItem()
  }
}

TodoListItem.PropTypes = {
  todo: PropTypes.string,
  index: PropTypes.number,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func,
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ delTodo, editTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem)
