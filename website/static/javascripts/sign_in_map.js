
$(document).ready(init);

function init(jQuery) {
  initMap();
}
// the key from the Mapbox examples (not mine)
var mapAccessToken = "pk.eyJ1IjoieWFuYXlicm9vayIsImEiOiJjamZpMGJ6aGszcXNrMnFucnh2cGhveWh6In0.UOaUZhNmBLLULGxe1ZlcFA";


function initMap() {
  map = MapGL();
}

function MapGL() {
  mapboxgl.accessToken = mapAccessToken;

  // initialize map
  var map = new mapboxgl.Map(
      {
      container: "sign_in_map", // container id
      style: "mapbox://styles/yanaybrook/cjfje1i1hffa32snsq91xluew", //stylesheet location
      center: [133.043,-24.764], // starting position
      zoom: 3 // starting zoom
      });

  // event handlers
  map.on("load", mapLoaded);
    return map;


  };

function mapLoaded() {

}
