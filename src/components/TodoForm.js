import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.input)
    // console.log(this.state.input);
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          onChange={this.handleChange}
          type="text"
          name="todo"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
