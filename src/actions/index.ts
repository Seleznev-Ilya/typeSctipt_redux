import { ADD_NEWONE_TASK } from "../constants";
import { TOGGLE_ITEM_TASK } from "../constants";
import { EDIT_ITEM_TASK } from "../constants";
import { DELET_ITEM_TASK } from "../constants";

export const addTodo = (payload: string) => ({
  type: ADD_NEWONE_TASK,
  id: new Date().getTime(),
  payload,
  completed: false,
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_ITEM_TASK,
  id,
});

export const editTodo = (payload: string, id: number) => ({
  type: EDIT_ITEM_TASK,
  payload,
  id,
});

export const deletTodo = (id: number) => ({
  type: DELET_ITEM_TASK,
  id,
});
