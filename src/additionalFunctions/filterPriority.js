// eslint-disable-next-line
function filterPriority(items, filter) {
  if (filter === 'all') {
    return items;
  }
  if (filter === 'high') {
    return items.filter((item) => item.priority === 'high');
  }
  if (filter === 'normal') {
    return items.filter((item) => item.priority === 'normal');
  }
  if (filter === 'low') {
    return items.filter((item) => item.priority === 'low');
  }
}
export default filterPriority;
