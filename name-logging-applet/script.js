const nameInput = document.getElementById('nameInput');
const saveButton = document.getElementById('saveButton');
const gallery = document.getElementById('gallery');
const totalLogs = document.getElementById('totalLogs');

saveButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const date = new Date().toLocaleString();

    if (name) {
        const cardCol = document.createElement('div');
        cardCol.className = 'col-md-4 mb-3';

        const card = document.createElement('div');
        card.className = 'card text-center';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = `Hello, ${name} - ${date}`;

        card.addEventListener('click', () => {
            alert(`You clicked on: ${name}`);
        });

        cardBody.appendChild(cardTitle);
        card.appendChild(cardBody);
        cardCol.appendChild(card);
        gallery.appendChild(cardCol);

        totalLogs.textContent = parseInt(totalLogs.textContent) + 1;

        nameInput.value = '';
    } else {
        alert('Please enter a name.');
    }
});
