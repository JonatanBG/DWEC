function initMap()
{

	navigator.geolocation.getCurrentPosition( success, error);

}



function success(position) {


  var coordenadas = position.coords;


  console.log('Tu posición actual es:');
  latitude = coordenadas.latitude;

  longitude = coordenadas.longitude;

  map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: latitude,
            lng: longitude,
        },
        zoom: 18
    })

	var marker = {
    lat: latitude,
    lng: longitude,
};
	addMarker(marker);
}

function error(error) {
  console.warn('ERROR(' + error.code + '): ' + error.message);
}

function addMarker(data) {
    new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.lng),
        map: map
    });
}