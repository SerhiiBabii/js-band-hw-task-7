function searchItems(items, search) {
  if (search.length === 0) {
    return items;
  }
  return items.filter((item) => {
    return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
}

export default searchItems;
