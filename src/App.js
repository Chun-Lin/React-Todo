import React, { Component } from 'react'
import './style/App.css'
import TodoAdd from './containers/TodoAdd'
import TodoList from './containers/TodoList'
import handleServerItemsLoad from './request'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
    }
  }

  addTodo = todoTitle => {
    this.setState(prevStat => ({
      todos: prevStat.todos.concat(todoTitle),
    }))
  }

  handleEdit = (index, todos, todoTitle) => {
    // todos[index] = todoTitle;
    const cloneTodos = [...todos]
    cloneTodos[index] = todoTitle

    return cloneTodos
  }

  editTodo = (selectedTodoKey, todoTitle) => {
    this.setState({
      todos: this.handleEdit(selectedTodoKey, [...this.state.todos], todoTitle),
    })
  }

  componentDidMount = () => {
    handleServerItemsLoad().then(todoList => {
      if (typeof todoList === 'object') {
        console.log(todoList)
        const todos = todoList.map(todo => todo.todo_title)

        this.setState({ todos })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Todo">
          <TodoAdd />
          <TodoList todos={this.state.todos} editTodo={this.editTodo} />
        </div>
      </div>
    )
  }
}

export default App
