import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = props => {
    const videoItems = props.todos.map((todo, index) => {
        console.log(`todo: ${todo}, index: ${index}`);

        return (
            <TodoListItem
                editTodo={props.editTodo}
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
