const latData = document.querySelector('#lat').value;
const latNumber = parseFloat(latData);
const lngData = document.querySelector('#lng').value;
const lngNumber = parseFloat(lngData);

function initMap() {
  // The location of Uluru
  const position = {
    lat: latNumber,
    lng: lngNumber,
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: position,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position,
    map,
  });
}
window.initMap = initMap;
