import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import '../style/TodoList.css';

const TodoList = props => {
    const videoItems = props.todos.map((todo, index) => {
        return (
            <div className="list-items">
                <TodoListItem
                    editTodo={props.editTodo}
                    deleteTodo={props.deleteTodo}
                    key={index}
                    index={index}
                    todo={todo}
                />
            </div>
        );
    });
    return <ul className="list">{videoItems}</ul>;
};

TodoList.PropTypes = {
    todos: PropTypes.array,
};

export default TodoList;
