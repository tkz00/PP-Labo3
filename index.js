import Car_Advertisement from "./carAdvertisement.js";

const storageName = "advertisements";

window.addEventListener("load", function(e)
{
    LoadAdvertisements(storageName);
});

function LoadAdvertisements(storageName)
{
    var advertisementsArray = Car_Advertisement.GetAdvertisements(storageName);

    var html = '';
    
    advertisementsArray.forEach(element => {
        var row = NewDivFromAdvertisement(element);
        html += row.outerHTML;
    });

    document.getElementsByClassName("anunciosCarousel")[0].innerHTML = html;
}

function NewDivFromAdvertisement(advertisement)
{
    var element = document.createElement('div');
    element.classList.add("anuncio");
    var html = '<h2>' + advertisement.title + '</h2>';
    html += '<h4>' + advertisement.description + '</h4>';
    html += '<p class="price">' + advertisement.price + '</p>';

    html += '<div class="info">';
    html += '<div><img src="car-door.png">' + advertisement.numDoors + '</div>';
    html += '<div><img src="km.png">' + advertisement.numKM + '</div>';
    html += '<div><img src="engine.png">' + advertisement.numPotencia + '</div>';
    html += '</div>';

    html += '<button type="button">Ver Vehiculo</button>';

    element.innerHTML = html.trim();

    return element;
}