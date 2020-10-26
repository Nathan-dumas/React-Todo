import React from "react";

const Todo = (props) => {
  const handleClick = () => {
    props.toggleItem(props.item.id);
  };

  return (
    <div className="maindiv">
      <div
        onClick={handleClick}
        className={`todo${props.item.completed ? "completed" : ""}`}
      >
        <p className="todos">{props.item.task}</p>
      </div>
    </div>
  );
};

export default Todo;
