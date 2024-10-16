document.addEventListener("DOMContentLoaded", function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            let gallery = document.getElementById('applet-gallery');
            data.forEach(item => {
                let card = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <img src="${item.image}" class="card-img-top" alt="logo">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                                <a href="${item.link}" class="btn btn-primary">Go to ${item.title}</a>
                            </div>
                        </div>
                    </div>
                `;
                gallery.innerHTML += card;
            });
        });
});
