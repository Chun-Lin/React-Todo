import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: ''
        };
    }

    handleAddKeyDown = event => {
        event.keyCode === 13 ? this.callbackAddTodo(this.state.todoTitle) : -1;
    };

    handleTodoTitleChange = event => {
        this.setState({ todoTitle: event.target.value });
    };

    callbackAddTodo = todoTitle => {
        this.props.onAddTodoChange(todoTitle);
    };

    render = () => {
        return (
            <div className="add-todo">
                <input
                    value={this.state.todoTitle}
                    onChange={this.handleTodoTitleChange}
                    onKeyDown={this.handleAddKeyDown}
                />
                <button
                    onClick={() => this.callbackAddTodo(this.state.todoTitle)}
                >
                    +
                </button>
            </div>
        );
    };
}

export default AddTodo;
