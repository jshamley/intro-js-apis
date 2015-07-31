function map1() { 
  var mapCanvas = document.getElementById('map-canvas-1'); 
  var mapOptions = { 
    center: new google.maps.LatLng(44.5403, -78.5463), 
    zoom: 8, 
    mapTypeId: google.maps.MapTypeId.ROADMAP 
  } 
  var map = new google.maps.Map(mapCanvas, mapOptions);
} 
google.maps.event.addDomListener(window, 'load', map1); 