import React from "react";
import InputMain from "../InputMain";
import selectImg from "../../asset/images/select.svg";
import { addTodo } from "../../actions";

const TodoReceiver = () => {
  return (
    <div className="receiver">
      <img className="select" src={selectImg} alt="selectImg" />
      <InputMain placeHolder={"Add task here"} action={addTodo} />
    </div>
  );
};

export default TodoReceiver;
