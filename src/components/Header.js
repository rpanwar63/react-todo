import React, { Component } from "react";
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props)
    this.deleteAllCompletedTodos = this.deleteAllCompletedTodos.bind(this)
    this.saveToLocal = this.saveToLocal.bind(this)
  }
  deleteAllCompletedTodos(key) {
    this.props.todo.slice(0).reverse().map(item => item.checked && 
      this.props.deleteTodo(item.key)
    )
  }
  
  saveToLocal() {
    const local = this.props.todo
    const lastkey = this.props.lastkey
    localStorage.setItem("local", JSON.stringify(local))
    localStorage.setItem("lastkey", lastkey)
  }

    render() {
      return (
        <nav>
            <span>Get Things Done.</span>
            <i className="far fa-heart" onClick={this.saveToLocal}></i>
            <i className="far fa-trash-alt" onClick={this.deleteAllCompletedTodos}></i>
        </nav>
      )
    }
  }
export default Header