import React, { Component } from 'react';
import '../style/TodoListItem.css';

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            text: this.props.todos
        };
    }


    toggleMode = () => {
        this.setState(prevStat => ({
            editMode: !prevStat.editMode
        }));
    };

    handleEditKeyDown = event => {
        event.keyCode === 13 ? this.toggleMode() : null;
    };

    renderReadModeTodoItem = ({ todo, index, deleteTodo, editTodo }) => {
        return (
            <li className="list-item">
                <div className="list-item-title">{todo}</div>

                <div className="list-buttons">
                    <button
                        onClick={this.toggleMode}
                        className="list-buttons edit"
                    >
                        <i class="fa fa-pencil" aria-hidden="true" />
                    </button>
                    <button
                        onClick={() => deleteTodo(index)}
                        className=" list-buttons delete"
                    >
                        <i class="fa fa-trash" aria-hidden="true" />
                    </button>
                </div>
            </li>
        );
    };

    renderEditModeTodoItem = ({ todo, index, editTodo }) => {
        return (
            <div className="list-item">
                <input
                    className="edit-input"
                    value={todo}
                    onChange={event => editTodo(index, event.target.value)}
                    onKeyDown={this.handleEditKeyDown}
                />
                <div className="list-buttons">
                    <button
                        onClick={this.toggleMode}
                        className="list-buttons complete"
                    >
                        <i class="fa fa-check" aria-hidden="true" />
                    </button>
                </div>
            </div>
        );
    };

    render() {
        return this.state.editMode
            ? this.renderEditModeTodoItem(this.props)
            : this.renderReadModeTodoItem(this.props);
    }
}

export default TodoListItem;
