function openApplet(id) {
    alert(`Opening Applet ${id}`);
}

function searchApplets() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".applet-card");

    cards.forEach(card => {
        const title = card.querySelector("h3").innerText.toLowerCase();
        if (title.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
