import React, { Component } from 'react';
import TodoListItem from './todo_list_item';
import '../style/todo_list.css';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const videoItems = this.props.todos.map((todo, index) => {
            return (
                <div className="list-items">
                    <TodoListItem
                        editTodo={this.props.editTodo}
                        deleteTodo={this.props.deleteTodo}
                        key={index}
                        index={index}
                        todo={todo}
                    />
                </div>
            );
        });
        return <ul className="list">{videoItems}</ul>;
    }
}

export default TodoList;
