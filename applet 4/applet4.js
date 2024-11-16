function addItem() {
    const input = document.getElementById('itemInput').value;
    if (input.trim() === '') return;
    const listItem = document.createElement('li');
    listItem.innerText = input;
    document.getElementById('itemList').appendChild(listItem);
    document.getElementById('itemInput').value = '';
  }
  
  function clearItems() {
    document.getElementById('itemList').innerHTML = '';
  }
  