import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/add_todo';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [{ todo_title: '' }]
        };

        // survey bind
        this.AddTodo = this.AddTodo.bind(this);
    }

    AddTodo(todoTitle) {
        this.setState({ todos: [{todo_title: todoTitle}] });
    }

    render() {
        return (
            <div className="App">
                <AddTodo onAddTodoChange={this.AddTodo} />
                <h2>{this.state.todos[0].todo_title}</h2>
            </div>
        );
    }
}

export default App;
