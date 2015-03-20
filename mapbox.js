$(function () {
    L.mapbox.accessToken = 'pk.eyJ1IjoiaGVuaG91c2UiLCJhIjoidFNwRC0yYyJ9.9vvWSl8iyevaSDXiPbeB1A';
    var map = L.mapbox.map('map', 'examples.map-i86nkdio', {
        zoomControl: false
    }).setView([4.04, -104.063], 2);

    // Disable drag and zoom handlers.
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();

    // Disable tap handler, if present.
    if (map.tap) map.tap.disable();
    
    $("#usd").on("click", function() {
      map.setView([39.69, -100.107], 5);
    });
    $("#eur").on("click", function() {
      map.setView([49.397, 8.042], 5);
    });
    $("#gbp").on("click", function() {
      map.setView([54.425, -6.064], 6);
    });
    $("#cad").on("click", function() {
      map.setView([56.475, -107.446], 5);
    });
    $("#jpy").on("click", function() {
      map.setView([36.695, 136.077], 6);
    });
    $("#btc").on("click", function() {
      map.setView([4.04, -104.063], 2);
    });  
});