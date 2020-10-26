import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const handleClick = () => {
    props.removeItem();
  };

  return (
    <div>
      {props.todos.map((item) => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button onClick={handleClick} >
          Clear Completed
      </button>
    </div>
  );
};

export default TodoList;
