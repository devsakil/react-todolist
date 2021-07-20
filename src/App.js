import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component{

  state = {
    todos: [
    ] 
  }

  componentDidMount() {
    let localTodos = this.getToLocalstorage();
    let todos = [...this.state.todos, ...localTodos]
    this.setState({ todos: todos})
  }

  deleteTodo = (id) => {
    // const todos = this.state.todos.filter(todo =>{
    //   return todo.id !== id
    //  });

      let todos = this.getToLocalstorage();
      todos.forEach((todo, index) => {
        if(todo.id === id){
          todos.splice(index, 1);
        }
      })

      localStorage.setItem("Todos", JSON.stringify(todos));

     this.setState({
       todos: todos
     })
  }

  getToLocalstorage = () => {
    let getTodos;
    if(localStorage.getItem("Todos") === null){
        getTodos = [];
    }else{
      getTodos = JSON.parse(localStorage.getItem("Todos"))
    }
    return getTodos;
  }

  addTodo = (todo) => {
    let d = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
    todo.id = Math.random();
    todo.date = d.getDate() + ' ' + months[d.getMonth()];
    let Todos = this.getToLocalstorage();
    let todos = [...Todos, todo];

    localStorage.setItem("Todos", JSON.stringify(todos));
    this.setState({
      todos: todos
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="todo-app container">
      <h1 className="text-center py-3 text-success font-weight-bold">Todo List</h1>
    
      <AddTodo newTodo={this.addTodo} />
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}



export default App;
