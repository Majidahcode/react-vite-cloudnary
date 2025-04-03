function initialize() {
    var mapOptions = {
                      zoom: 15,
                  center: new google.maps.LatLng(16.832179,96.134976)
    };

                  var map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);
  }