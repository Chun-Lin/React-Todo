import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/add_todo';
import TodoList from './containers/todo_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    AddTodo = todoTitle => {
        this.setState(prevStat => ({
            todos: prevStat.todos.concat(todoTitle)
        }));
    };

    handleDelete = (index, todos) => {
        todos.splice(index, 1);
        console.log('todos:', todos);
        return todos;
    };

    handleEdit = (index, todos, todoTitle) => {
        todos[index] = todoTitle;
        return todos;
    };

    editTodo(selectedTodoKey, todoTitle) {
        console.log(`selectedTodoKey: ${selectedTodoKey}, todoTitle: ${todoTitle}`);
        this.setState({
            todos: this.handleEdit(
                selectedTodoKey,
                this.state.todos,
                todoTitle
            )
        });
    }

    render() {
        return (
            <div className="App">
                <AddTodo onAddTodoChange={this.AddTodo} />
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={selectedTodoKey => {
                        this.setState({
                            todos: this.handleDelete(
                                selectedTodoKey,
                                this.state.todos
                            )
                        });
                    }}
                    editTodo={this.editTodo.bind(this)}
                />
            </div>
        );
    }
}

export default App;
