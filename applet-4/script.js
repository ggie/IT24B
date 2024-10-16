
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const itemList = document.getElementById("itemList");

    const items = [
        "Kapoy",
        "kapoy jud",
        "nagkaon naka?",
        "haha imy na kaayo",
        "kung ang coconut kay lubi kiss ko bi",
        "imissyou na",
        "gwapa kayka saimong story pwede sugdan nato atoang love story?",
        "pwede ko mo bangking ug mo parking saimong luag nga kasingkasing?"
    ];

    function populateList(filter = "") {
        itemList.innerHTML = ""; 
        const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));

        filteredItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            itemList.appendChild(listItem);
        });
    }

    searchInput.addEventListener("input", () => {
        const filterValue = searchInput.value;
        populateList(filterValue);
    });

    populateList();
});
