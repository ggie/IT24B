document.addEventListener('DOMContentLoaded', () => {
    const logButton = document.getElementById('logButton');
    const logList = document.getElementById('logList');
    const totalLogs = document.getElementById('totalLogs');

    let logCount = 0;

    logButton.addEventListener('click', () => {
        const now = new Date();
        const logEntry = `Log ${logCount + 1}: ${now.toLocaleString()}`;

        const li = document.createElement('li');
        li.textContent = logEntry;

        logList.appendChild(li);

        logCount++;
        totalLogs.textContent = logCount;
    });
});
