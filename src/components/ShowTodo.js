import React from 'react'
import './ShowTodo.css'
import TodoItem from './TodoItem'

class ShowTodo extends React.Component {
    render() {
        const showTodoList = this.props.todo.map(item => <TodoItem key={item.key} todo={item} checkTodo={this.props.checkTodo} deleteTodo={this.props.deleteTodo} />)
        return (
            <div className="todoContainer">
                {showTodoList}
            </div>
        )
    }
}
export default ShowTodo