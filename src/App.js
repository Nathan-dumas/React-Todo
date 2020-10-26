import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    );
  }
}

export default App;
