document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([8.3680, 124.8667], 17); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([8.3680, 124.8667])
        .addTo(map)
        .bindPopup(`<b>Manolo Fortich Centennial Plaza</b><br>A popular landmark in Bukidnon, Philippines.`)
        .openPopup();
});
