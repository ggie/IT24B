const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

fetch('pins.json')
  .then(response => response.json())
  .then(data => {
    data.pins.forEach(pin => {
      L.marker([pin.lat, pin.lng]).addTo(map).bindPopup(pin.name);
    });
  });
  