document.addEventListener('DOMContentLoaded', () => {
    const logButton = document.getElementById('logButton');
    const logList = document.getElementById('logList');
    const totalLogs = document.getElementById('totalLogs');

    let logs = [];

    logButton.addEventListener('click', () => {
        const currentDate = new Date().toLocaleString();
        const logMessage = `${currentDate} - New log added!`;

        logs.push(logMessage);

        updateLogDisplay();
    });

    function updateLogDisplay() {
        logList.innerHTML = ''; 
        logs.forEach(log => {
            const listItem = document.createElement('li');
            listItem.textContent = log;
            logList.appendChild(listItem);
        });

       
        totalLogs.textContent = logs.length;
    }
});
