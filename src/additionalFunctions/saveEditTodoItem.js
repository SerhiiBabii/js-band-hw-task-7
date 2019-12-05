function saveEditTodoItem(title, description, priority, id, todos) {
  const index = todos.findIndex((el) => el.id === id);
  const oldItem = todos[index];
  const newItem = {
    ...oldItem,
    title,
    description,
    priority,
  };

  return [...todos.slice(0, index), newItem, ...todos.slice(index + 1)];
}

export default saveEditTodoItem;
