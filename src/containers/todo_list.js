import React, { Component } from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const videoItems = this.props.todos.map((todo, index) => {
            console.log(`todo: ${todo}, index: ${index}`);
            return (
                <TodoListItem
                    editTodo={this.props.editTodo}
                    deleteTodo={this.props.deleteTodo}
                    key={index}
                    index={index}
                    todo={todo}
                />
            );
        });
        return <ul>{videoItems}</ul>
    }
}

export default TodoList;
