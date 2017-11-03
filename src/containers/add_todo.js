import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: ''
        };

        // this.onInputChange = this.onInputChange.bind(this);
    }

    render() {
        return (
            <div className="add-todo">
                <input
                    value={this.state.todoTitle}
                    onChange={event => this.setState({todoTitle: event.target.value})}    
                />
                <button
                    type="button"
                    onClick={() => this.onInputChange(this.state.todoTitle)}>+</button>
                <h1>{this.state.todoTitle}</h1>
            </div>
        );
    }

    onInputChange(todoTitle) {
        // this.setState({ todoTitle });
        this.props.onAddTodoChange(todoTitle);
    }
}

export default AddTodo;
