import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: ''
        };
    }

    render = () => {
        return (
            <div className="add-todo">
                <input
                    value={this.state.todoTitle}
                    onChange={event =>
                        this.setState({ todoTitle: event.target.value })}
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
