import React from 'react';

const TodoListItem = ({ todo, index, deleteTodo }) => {
    return (
        <li>
            {todo}
            <div className="list-buttons">
                <button className="edit">Edit</button>
                <button onClick={() => deleteTodo(index)} className="delete">
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoListItem;
