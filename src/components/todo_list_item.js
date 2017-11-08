import React, { Component } from 'react';
import '../style/todo_list_item.css';

class TodoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        };
    }

    toggleMode = () => {
        this.setState({ editMode: !this.state.editMode });
    };

    handleEditKeyDown = event => {
        event.keyCode === 13 ? this.toggleMode() : -1;
    };

    readModeTodoItem = ({ todo, index, deleteTodo, editTodo }) => {
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

    editModeTodoItem = ({ todo, index, editTodo }) => {
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
            ? this.editModeTodoItem(this.props)
            : this.readModeTodoItem(this.props);
    }
}

export default TodoListItem;
