function loadApplet(appletNumber) {
    switch (appletNumber) {
        case 1:
            alert("Loading Applet 1: Basic Events");
            // Code for Applet 1 functionality
            break;
        case 2:
            alert("Loading Applet 2: Leaflet Map");
            // Code for Leaflet Map integration
            break;
        case 3:
            alert("Loading Applet 3: Event Button Logger");
            // Code for Button Logger functionality
            break;
        case 4:
            alert("Loading Applet 4: Dynamic Elements");
            // Code for dynamic elements
            break;
        case 5:
            alert("Loading Applet 5: OpenWeather API");
            // Fetch weather data and display
            break;
        case 6:
            alert("Loading Applet 6: Todo List");
            // Code for Todo List
            break;
        default:
            alert("Invalid Applet!");
    }
}

function searchApplets() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".applet-card");

    cards.forEach((card) => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
    });
}
