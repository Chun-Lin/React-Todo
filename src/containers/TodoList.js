import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'
import '../style/TodoList.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTodo } from '../actions/index'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.fetchTodo()
  }

  renderVideoItems = () => this.props.todos.map((todo, index) => {
    return (
      <div className="list-items" key={index}>
        <TodoListItem index={index} todo={todo.todo_title}/>
      </div>
    )
  })

  render() {
    console.log(`todos: ${this.props.todos}`)
    console.log('render')
    return <ul className="list">{this.renderVideoItems()}</ul>
  }
}

TodoList.PropTypes = {
  todos: PropTypes.array,
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTodo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
