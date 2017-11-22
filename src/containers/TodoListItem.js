import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../style/TodoListItem.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { delTodo } from '../actions/actionDelTodo'

class TodoListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editMode: false,
      text: this.props.todo,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.todo !== nextProps.todo) {
      this.setState({ text: nextProps.todo })
    }
  }

  // handleDeleteTodo = () => {
  //     const { todo, index, deleteTodo } = this.props
  //     deleteTodo(index)
  //     this.setState({text: todo})
  // }
  // 原本我們應該要在按下button按鈕時就setState({text: todo})，但是在handleDeleteTodo裡面setState是set舊的props，所以要用componentWillReceiveProps這個lifecycle的function去獲得最新的props更新state

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

  handleEditTodo = ({ index, editTodo }) => {
    editTodo(index, this.state.text)
    this.toggleMode()
  }

  handleEditKeyDown = event => {
    event.keyCode === 13 ? this.toggleMode() : null
  }

  renderReadModeTodoItem = ({ todo, index, editTodo }) => {
    return (
      <li className="list-item">
        <div className="list-item-title">{this.state.text}</div>
        {/* 直接用props傳進去會更好，因為this.state.text他接收到的資料是props，但是更新state之後，我們還要跟props同步會很麻煩，直接將props資料丟進來就可以確保跟props同步*/}
        <div className="list-buttons">
          <button onClick={this.toggleMode} className="list-buttons edit">
            <i className="fa fa-pencil" aria-hidden="true" />
          </button>
          <button
            // onClick={() => deleteTodo(index)}
            onClick={() => this.props.delTodo(index, this.props.todos)}
            className=" list-buttons delete"
          >
            <i className="fa fa-trash" aria-hidden="true" />
          </button>
        </div>
      </li>
    )
  }

  renderEditModeTodoItem = ({ todo, index, editTodo }) => {
    return (
      <div className="list-item">
        <input
          className="edit-input"
          value={this.state.text}
          onChange={event => this.updateText(event.target.value)}
          onKeyDown={this.handleEditKeyDown}
        />
        <div className="list-buttons">
          <button
            onClick={() => this.handleEditTodo(this.props)}
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
      ? this.renderEditModeTodoItem(this.props)
      : this.renderReadModeTodoItem(this.props)
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
  return bindActionCreators({ delTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem)
