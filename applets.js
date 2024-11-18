class AppletCard {
    constructor(title, description, link) {
        this.title = title;
        this.description = description;
        this.link = link;
    }

    createCard() {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card applet-card';
        cardDiv.innerHTML = `
            <a href="${this.link}" class="applet-card-link">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                </div>
                <div class="tooltip-message">${this.description}</div>
            </a>
        `;
        return cardDiv;
    }
}

class AppletRenderer {
    constructor(containerId, searchId) {
        this.container = document.getElementById(containerId);
        this.searchInput = document.getElementById(searchId);
        this.applets = [];
    }

    fetchAppletData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.applets = data;
                this.renderApplets();
            })
            .catch(error => console.error('Error fetching applet data:', error));
    }

    renderApplets() {
        this.container.innerHTML = '';
        this.applets.forEach(applet => {
            const appletCard = new AppletCard(applet.title, applet.description, applet.link);
            this.container.appendChild(appletCard.createCard());
        });

        this.addSearchListener();
    }

    addSearchListener() {
        this.searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredApplets = this.applets.filter(applet =>
                applet.title.toLowerCase().includes(searchTerm) ||
                applet.description.toLowerCase().includes(searchTerm)
            );
            this.renderFilteredApplets(filteredApplets);
        });
    }

    renderFilteredApplets(filteredApplets) {
        this.container.innerHTML = '';
        filteredApplets.forEach(applet => {
            const appletCard = new AppletCard(applet.title, applet.description, applet.link);
            this.container.appendChild(appletCard.createCard());
        });
    }
}
