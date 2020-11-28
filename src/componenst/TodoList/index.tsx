import React from "react";
import { connect } from "react-redux";
import TodoItem from "../../componenst/TodoItem";

interface Props {
  todoList: any;
}
const TodoList = ({ todoList }: Props) => {
  console.log(todoList);
  return (
    <div className="list">
      {todoList.map((item: any) => (
        <TodoItem key={item.id} itemObj={item} />
      ))}
    </div>
  );
};
const mapStateToProps = (store: any) => {
  console.log(store);

  return {
    todoList: store.todoList,
  };
};
export default connect(mapStateToProps)(TodoList);
