import React, { Component } from 'react';

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
        event.keyCode === 13 ? this.toggleMode() : -1 ;
    };

    readModeTodoItem = ({ todo, index, deleteTodo, editTodo }) => {
        console.log(`editMode: ${this.state.editMode}`);
        return (
            <li>
                {todo}
                <div className="list-buttons">
                    <button onClick={this.toggleMode} className="edit">
                        Edit
                    </button>
                    <button
                        onClick={() => deleteTodo(index)}
                        className="delete"
                    >
                        Delete
                    </button>
                </div>
            </li>
        );
    };

    editModeTodoItem = ({ todo, index, editTodo }) => {
        return (
            <div>
                <input
                    value={todo}
                    onChange={event => editTodo(index, event.target.value)}
                    onKeyDown={this.handleEditKeyDown}
                />
                <div className="list-buttons">
                    <button onClick={this.toggleMode} className="complete">
                        Complete
                    </button>
                </div>
            </div>
        );

        // return <h1>EditMode!!</h1>;
    };

    render() {
        return this.state.editMode
            ? this.editModeTodoItem(this.props)
            : this.readModeTodoItem(this.props);
    }
}

export default TodoListItem;

// TODO: set a state for edit mode and read mode, and another state is index, to see which list-item should be edited
