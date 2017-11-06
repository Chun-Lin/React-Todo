import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = props => {
    const videoItems = props.todos.map((todo, index) => {
        return (
            <TodoListItem
                deleteTodo={props.deleteTodo}
                key={index}
                index={index}
                todo={todo}
            />
        );
    });

    return <ul>{videoItems}</ul>;
};

export default TodoList;
