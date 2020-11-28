import { ADD_NEWONE_TASK } from "../constants";
import { TOGGLE_ITEM_TASK } from "../constants";
import { EDIT_ITEM_TASK } from "../constants";
import { DELET_ITEM_TASK } from "../constants";

const todoList = (state = [], actions: any) => {
  switch (actions.type) {
    case ADD_NEWONE_TASK:
      return [
        ...state,
        {
          id: actions.id,
          payload: actions.payload,
          completed: actions.completed,
        },
      ];

    case TOGGLE_ITEM_TASK:
      return state.map((todo: any) =>
        todo.id === actions.id ? { ...todo, completed: !todo.completed } : todo
      );

    case EDIT_ITEM_TASK:
      return state.map((todo: any) =>
        todo.id === actions.id ? { ...todo, payload: actions.payload } : todo
      );

    case DELET_ITEM_TASK:
      return [];

    // return state.filter((todo: any) => {
    //   return todo.id !== actions.id;
    // });

    default:
      return state;
  }
};

export default todoList;
