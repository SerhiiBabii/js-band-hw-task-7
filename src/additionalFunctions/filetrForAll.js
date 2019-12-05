import filterPriority from './filterPriority';
import filterStatus from './filterStatus';

function filetrForAll(items, priority, status) {
  let currentItems = filterPriority(items, priority);
  currentItems = filterStatus(currentItems, status);
  return currentItems;
}
export default filetrForAll;
