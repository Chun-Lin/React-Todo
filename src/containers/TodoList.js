import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'
import '../style/TodoList.css'
import { connect } from 'react-redux'
import { fetchTodo } from '../actions/index'
import store from '../store/store'

class TodoList extends Component {
  componentDidMount = () => {
    this.props.fetchTodo()
  }

  renderVideoItems = () =>
    store.getState().todos.map((todo,index) => {
      return (
        <div className="list-items" key={todo.id}>
          <TodoListItem index={index} id={todo.id} todo={todo.todo_title} />
        </div>
      )
    })

  render() {
    return <ul className="list">{this.renderVideoItems()}</ul>
  }
}

TodoList.PropTypes = {
  todos: PropTypes.array,
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

const mapDispatchToProps = {
  fetchTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
