document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');
    const nameInput = document.getElementById('nameInput');
    const logList = document.getElementById('logList');
    const totalLogs = document.getElementById('totalLogs');

    let logCount = 0;

    saveButton.addEventListener('click', () => {
        const name = nameInput.value.trim();

        if (name) {
            const now = new Date();
            const logEntry = `${name} added on ${now.toLocaleString()}`;

            const li = document.createElement('li');
            li.textContent = logEntry;

            logList.appendChild(li);

            logCount++;
            totalLogs.textContent = logCount;

           
            nameInput.value = '';
        } else {
            alert('Please enter a name.');
        }
    });
});
