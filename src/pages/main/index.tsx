import React from "react";
import TodoReceiver from "../../componenst/TodoReceiver";
import TodoList from "../../componenst/TodoList";
import "./style.scss";

const Main = () => {
  return (
    <div className="todo__main">
      <TodoReceiver />
      <TodoList />
    </div>
  );
};

export default Main;
