import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import TodoListItem from './TodoListItem';
import '../style/TodoList.css';

const TodoList = props => {
    const videoItems = props.todos.map((todo, index) => {
        return (
            <div className="list-items" key={index}>
                <TodoListItem
                    editTodo={props.editTodo}
                    deleteTodo={props.deleteTodo}
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
