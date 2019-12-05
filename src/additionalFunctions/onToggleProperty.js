function onToggleProperty(arr, id) {
  const index = arr.findIndex((el) => el.id === id);
  const oldItem = arr[index];
  const newItem = {
    ...oldItem,
    status: !oldItem.status,
  };

  return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
}

export default onToggleProperty;
