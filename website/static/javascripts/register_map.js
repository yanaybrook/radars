
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
      container: "register_map", // container id
      style: "mapbox://styles/yanaybrook/cjfjjlckiflfq2rnvumsra0w9", //stylesheet location
      center: [73.495,4.202], // starting position
      zoom: 12 // starting zoom
      });

  // event handlers
  map.on("load", mapLoaded);
    return map;


  };

function mapLoaded() {

}
