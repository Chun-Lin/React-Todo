import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'
import '../style/TodoList.css'
import { connect } from 'react-redux'

const TodoList = props => {
  const videoItems = props.todos.map((todo, index) => {
    return (
      <div className="list-items" key={index}>
        <TodoListItem
          editTodo={props.editTodo}
          index={index}
          todo={todo}
        />
      </div>
    )
  })
  return <ul className="list">{videoItems}</ul>
}

TodoList.PropTypes = {
  todos: PropTypes.array,
}

const mapStateToProps = ({ todos }) => {
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
