var map;
var cityCircle;
var InfoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -36.8485, lng: 174.7633 },
        zoom: 8
    });
    var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center:{ lat: -36.8485, lng: 174.7633 },
        radius: 50000,
        editable: true
    });
    cityCircle.setMap(map);
    cityCircle.addListener(cityCircle, 'radius_changed');
    infoWindow = new google.maps.InfoWindow();
    function showRad(event) {
        var rad = cityCircle.getRadius();
        var contentString = '<b>Circle moved.</b><br>' +
            'New north-east corner: ' + rad;
        infoWindow.setContent(contentString);
        infoWindow.setPosition(ne);
        infoWindow.open(map);
    }
}
