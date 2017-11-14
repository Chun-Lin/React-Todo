import React, { Component } from 'react';
import './style/App.css';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import handleServerItemsLoad from './request';
import { remove } from 'ramda';

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
        console.log(`${typeof todos} index: ${index} todos: ${todos}`);
        const newTodos = remove(index, 1, todos);
        console.log(`${typeof newTodos} newTodos: ${newTodos}`);

        return newTodos;
    };

    deleteTodo = selectedTodoKey => {
        console.log(`selectedTodoKey: ${selectedTodoKey}`);
        console.log(`state.todos: ${this.state.todos}`);
        this.setState(prevState => ({
            todos: this.handleDelete(selectedTodoKey, prevState.todos) // like this.state.todos.slice(), copy an array
        }));
    };

    handleEdit = (index, todos, todoTitle) => {
        // todos[index] = todoTitle;
        const cloneTodos = [...todos];
        cloneTodos[index] = todoTitle;

        return cloneTodos;
    };

    editTodo = (selectedTodoKey, todoTitle) => {
        this.setState({
            todos: this.handleEdit(
                selectedTodoKey,
                [...this.state.todos],
                todoTitle
            )
        });
    };

    componentDidMount = () => {
        handleServerItemsLoad().then(todoList => {
            if (typeof todoList === 'object') {
                console.log(todoList);
                const todos = todoList.map(todo => todo.todo_title);

                this.setState({ todos });
            }
        });
    };

    render() {
        return (
            <div className="App">
                <div className="Todo">
                    <TodoAdd
                        onAddTodoChange={this.addTodo}
                        todos={this.state.todos}
                    />
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
