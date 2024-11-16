function logClick() {
    const logList = document.getElementById('logList');
    const listItem = document.createElement('li');
    listItem.innerText = `Button clicked at ${new Date().toLocaleTimeString()}`;
    logList.appendChild(listItem);
  }
  