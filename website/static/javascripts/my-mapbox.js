
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
      container: "map", // container id
      style: "mapbox://styles/yanaybrook/cjfhzvmgsdv202sr2od5fvg17", //stylesheet location
      center: [-122.533,37.726], // starting position
      zoom: 10 // starting zoom
      });

  // event handlers
  map.on("load", mapLoaded);
    return map;


  };

function mapLoaded() {
  
}
