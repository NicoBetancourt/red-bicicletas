var map = L.map('main_map').setView([4.752466, -74.064737], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([4.752466, -74.064737]).addTo(map);

$.ajax({
    type: 'GET',
    dataType: "json",
    url: "api/bicicletas",
    success: (result) => {
        result.bicicletas.forEach((bici) => {
            L.marker(bici.ubicacion,{title: bici.id}).addTo(map);
        });
    }
})
