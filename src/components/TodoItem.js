import React from 'react'
import './TodoItem.css'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheck = this.handleCheck.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleCheck() {
        this.props.checkTodo(this.props.todo.key, this.props.todo.checked, this.props.todo.value)
    }
    handleRemove() {
        this.props.deleteTodo(this.props.todo.key)
    }
    render() {
        return (
            <div  className={this.props.todo.checked ? "todoitem checked" : "todoitem"}>
                <span onClick={this.handleCheck}>{this.props.todo.value}</span>
                {this.props.todo.checked && <i className="fas fa-check" onClick={this.handleCheck}></i>}
                <i className="fas fa-times" onClick={this.handleRemove}></i>
            </div>
        )
    }
}
export default TodoItem