import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css"
const todos = [
  {
    task: "Water the plants",
    id: 12344,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  addItem = (item) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: item,
          id: this.state.todos.length,
          completed: false,
        },
      ],
    });
  };

  removeItem = () => {
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
    });
  };

  toggleItem = (itemId) => {
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  render() {
    return (
      <div className="app" >
        <h1 className="title">Todo List</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList 
          removeItem={this.removeItem}
          toggleItem={this.toggleItem}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
