function showLiveText() {
    const input = document.getElementById('textInput').value;
    document.getElementById('liveText').innerText = `Live Text: ${input}`;
  }
  
  function showAlert() {
    const input = document.getElementById('textInput').value;
    alert(`You entered: ${input}`);
  }
  