import React from 'react'
import './AddTodo.css'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
        this.createTodo = this.createTodo.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    createTodo(e) {
        this.setState({newTodo: e.target.value})
    }
    handleClick(e) {
        e.preventDefault();
        this.props.addTodoItem(this.state.newTodo);
        this.setState({newTodo: ""});
      }
    render() {
        return (
            <div className="inputContainer">
                <form onSubmit={this.handleClick}>
                <input 
                    id="newTodoInput"
                    type="text" 
                    name="addTodo" 
                    placeholder="Add new To Do" 
                    value={this.state.newTodo}
                    onChange={this.createTodo}
                /></form>
                <i className="fas fa-plus" onClick={this.handleClick}></i>
            </div>
        )
    }
}
export default AddTodo