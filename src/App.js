import React from 'react';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ShowTodo from './components/ShowTodo'
import './App.css'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
        todoList: [],
        lastKey:0
    }
    this.addTodoItem = this.addTodoItem.bind(this)
    this.checkTodo = this.checkTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  componentDidMount() {
    const todos = JSON.parse( localStorage.getItem( "local" ) );
    this.setState( { todoList: todos } );
  }

  addTodoItem(val) {
    let id = this.state.lastKey + 1
    let obj = [{"key": id, "value": val, "checked": false}]
    let newTodo = obj.concat(this.state.todoList)
    this.setState({
      todoList : newTodo,
      lastKey: id
    })
  }
  
  checkTodo(key,checked,value) {
    let index = this.state.todoList.findIndex(item => item.key === key)
    let check = !checked
    let obj = {"key": key, "value": value, "checked": check}
    this.setState({
      todoList : this.state.todoList.splice(index,1)
    })
    let newTodo = this.state.todoList
    newTodo.splice(index,0,obj)
    this.setState({
      todoList : newTodo
    })
  }
  
  deleteTodo(key) {
    let index = this.state.todoList.findIndex(item => item.key === key)
    let newTodo = this.state.todoList
    newTodo.splice(index,1)
    this.setState({
      todoList : newTodo
    })
  }
  
  render() {
    return (
      <div className="container">
        <Header todo={this.state.todoList} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodoItem={this.addTodoItem}/>
        {this.state.todoList.length ? <ShowTodo todo={this.state.todoList} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/> : <p>No todos</p>}
      </div>
    )
  }
}

export default App;
