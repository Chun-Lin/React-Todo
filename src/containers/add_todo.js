import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: ''
        };
    }

    handleAddKeyDown = event => {
        event.keyCode === 13 ? this.onInputChange(this.state.todoTitle) : -1;
    };

    render = () => {
        return (
            <div className="add-todo">
                <input
                    value={this.state.todoTitle}
                    onChange={event =>
                        this.setState({ todoTitle: event.target.value })}
                    onKeyDown={this.handleAddKeyDown}
                />
                <button
                    onClick={() => this.onInputChange(this.state.todoTitle)}
                >
                    +
                </button>
            </div>
        );
    };

    onInputChange = todoTitle => {
        this.props.onAddTodoChange(todoTitle);
    };
}

export default AddTodo;
