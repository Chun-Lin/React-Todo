import React from 'react';

const TodoListItem = ({ todo, index, deleteTodo, editTodo }) => {
    return (
        <li>
            {todo}
            <div className="list-buttons">
                <button
                    onClick={() => editTodo(index, 'Gary')}
                    className="edit"
                >
                    Edit
                </button>
                <button onClick={() => deleteTodo(index)} className="delete">
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoListItem;
