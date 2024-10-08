const logButton = document.getElementById('logButton');
const clearButton = document.getElementById('clearButton');
const logDisplay = document.getElementById('logDisplay');
const totalLogs = document.getElementById('totalLogs');

let logCount = 0;

logButton.addEventListener('click', () => {
    const date = new Date();
    const logEntry = document.createElement('div');
    logEntry.textContent = `Log Entry ${logCount + 1}: ${date.toLocaleString()}`;
    logDisplay.appendChild(logEntry);
    logCount++;
    totalLogs.textContent = logCount;
});

clearButton.addEventListener('click', () => {
    logDisplay.innerHTML = ''; 
    logCount = 0;            
    totalLogs.textContent = logCount; 
});
