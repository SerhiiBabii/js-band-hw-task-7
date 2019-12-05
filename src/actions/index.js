import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  TOGGLE_STATUS_TODO_ITEM,
  SHOW_FILTERED_TODO_ITEMS,
  SHOW_MODAL_AREA,
  HIDE_MODAL_AREA,
} from './actionsTypes';

let todoId = 5;

// eslint-disable-next-line no-return-assign
export const addTodoItem = (title, description, priority, id = (todoId += 1)) => ({
  type: ADD_TODO_ITEM,
  id,
  title,
  description,
  priority,
});

export const deleteTodoItem = (id) => ({
  type: DELETE_TODO_ITEM,
  id,
});

export const toggleStatusTodoItem = (id) => ({
  type: TOGGLE_STATUS_TODO_ITEM,
  id,
});

export const showFilteredTodoItems = (name, value) => ({
  type: SHOW_FILTERED_TODO_ITEMS,
  name,
  value,
});

export const showModalArea = () => ({
  type: SHOW_MODAL_AREA,
});

export const hideModalArea = () => ({
  type: HIDE_MODAL_AREA,
});
