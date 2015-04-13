$(document).ready(function() {
    var map = L.map('map').setView([40.2838, -3.8215], 16);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { //para mapquest: http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    //Añado marcador del aulario II
    var marker = L.marker([40.2838, -3.8215]).addTo(map);
    marker.bindPopup("<b>Aulario III</b><br>I am a popup.").openPopup();
    
    //Añadir marcador cuando pulsas, ejercicio 5.9.2
    map.on('click', function(e) {
        var marker2 = L.marker(e.latlng).addTo(map);
        marker2.bindPopup("<b>Marker custom</b><br>" + e.latlng).openPopup();
        //alert(e.latlng);
    });
    
    
    
    //Geolocalizacion, ejercicio 5.9.3
    map.locate({setView: true, maxZoom: 16});
    
    map.on('locationfound', function(e) {
        alert(e.latlng)
    });
    
    function onLocationError(e) {
    alert(e.message);
    }

    map.on('locationerror', onLocationError);
});
