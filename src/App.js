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
                    
                    
                />
            </div>
        );
    }
}

export default App;
