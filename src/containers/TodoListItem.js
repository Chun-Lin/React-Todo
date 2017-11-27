import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/TodoListItem.css'
import { connect } from 'react-redux'
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

  handleEditTodo = (index, todo_title) => {
    this.props.editTodo(index, todo_title)
    this.toggleMode()
  }

  handleEditKeyDown = (index, todo_title, event) => {
    if (event.keyCode === 13 && todo_title !== '') {
      this.handleEditTodo(index, todo_title)
    }
  }
  // sychornize the component's state to latest store data
  componentWillReceiveProps(nextProps) {
    if (this.props.todo !== nextProps.todo) {
      this.setState({ text: nextProps.todo })
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
            onClick={() => this.props.delTodo(index)}
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
    console.log(`state.text: ${this.state.text}`)
    return (
      <div className="list-item">
        <input
          className="edit-input"
          value={this.state.text}
          onChange={event => this.updateText(event.target.value)}
          onKeyDown={event =>
            this.handleEditKeyDown(index, this.state.text, event)
          }
        />
        <div className="list-buttons">
          <button
            onClick={() => this.handleEditTodo(index, this.state.text)}
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

const mapDispatchToProps = {
  delTodo,
  editTodo,
}

export default connect(null, mapDispatchToProps)(TodoListItem)
