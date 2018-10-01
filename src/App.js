import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk the dog', isCompleted: true },
        { description: 'Wash dishes', isCompleted: false },
        { description: 'Buy paper towels', isCompleted: false }
      ],
      newTodoDescription: ''
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }


  deleteTodo(index) {
    let { todos } = this.state;
    todos.slice(index, 1);
    this.setState({ todos: todos })
  }

  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }


  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' }); 
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index }  description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } onDelete={ this.deleteTodo } />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>

        <button onClick={ this.deleteTodo }>{ ToDo }</button>
      </div>
    );
  }
}

export default App;
