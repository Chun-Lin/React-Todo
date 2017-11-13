import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { handleServerItemAdd } from '../request';
import '../style/TodoAdd.css';

class TodoAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: ''
        };
    }

    handleChange = keyword => evt => {
        this.setState({ [keyword]: evt.target.value });
    };

    handleAddKeyDown = event => {
        event.keyCode === 13 ? this.addTodo(this.state.todoTitle) : null;
    };

    addTodo = todoTitle => {
        this.props.onAddTodoChange(todoTitle);
        this.setState({ todoTitle: '' });
    };

    render = () => {
        return (
            <div className="add-todo">
                <input
                    className="add-input"
                    placeholder="Add Your Todos Here!!"
                    value={this.state.todoTitle}
                    onChange={this.handleChange('todoTitle')}
                    onKeyDown={this.handleAddKeyDown}
                />
                <button
                    className="add-button"
                    onClick={() => this.addTodo(this.state.todoTitle)}
                >
                    +
                </button>
            </div>
        );
    };
}

TodoAdd.PropTypes = {
    onAddTodoChange: PropTypes.func
};

export default TodoAdd;
