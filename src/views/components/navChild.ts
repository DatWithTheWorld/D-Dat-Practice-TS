const navChild = (array) => {
  let listItems = '';
  for (let i = 0; i < array.length; i++) {
    listItems += `<li><a href="">${array[i]}</a></li>`;
  }
  return listItems;
};

export default navChild;
