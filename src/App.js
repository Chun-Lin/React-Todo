import React, { Component } from 'react';
import './style/App.css';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

import * as R from 'ramda';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    addTodo = todoTitle => {
        this.setState(prevStat => ({
            todos: prevStat.todos.concat(todoTitle)
        }));
    };

    handleDelete = (index, todos) => {
        const newTodos = R.remove(index, 1, todos);

        return newTodos;
    };

    deleteTodo = selectedTodoKey => {
        this.setState({
            todos: this.handleDelete(selectedTodoKey, [...this.state.todos]) // like this.state.todos.slice(), copy an array
        });
    };

    handleEdit = (index, todos, todoTitle) => {
        // todos[index] = todoTitle;
        const cloneTodos = [...todos];
        cloneTodos[index] = todoTitle;

        return cloneTodos;
    };

    editTodo = (selectedTodoKey, todoTitle) => {
        this.setState({
            todos: this.handleEdit(selectedTodoKey, [...this.state.todos], todoTitle)
        });
    };

    render() {
        return (
            <div className="App">
                <div className="Todo">
                    <TodoAdd onAddTodoChange={this.addTodo} todos={this.state.todos} />
                    <TodoList
                        todos={this.state.todos}
                        deleteTodo={this.deleteTodo}
                        editTodo={this.editTodo}
                    />
                </div>
            </div>
        );
    }
}

export default App;
