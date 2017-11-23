import React, { Component } from 'react'
import './style/App.css'
import TodoAdd from './containers/TodoAdd'
import TodoList from './containers/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Todo">
          <TodoAdd />
          <TodoList />
        </div>
      </div>
    )
  }
}

export default App
