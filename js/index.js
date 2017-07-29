var weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lat=";
var temp = "";

//fetches location and weather and writes the appropriate info to the page
$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      $.getJSON(weatherUrl + position.coords.latitude +
        "&lon=" + position.coords.longitude,
        function(weather) {
          temp = Math.round(weather.main.temp);
          $('#cityName').html("<div class='row'>" + weather.name +
            "</div>");
          $('#temp').html(Math.round(weather.main.temp) +
            "<a href='#' onclick='convertToF()'>&#8451</a>");
          $('#description').html(weather.weather[0].description);
          $('#icon').html("<img src='" + weather.weather[0].icon +
            "'>");
        });
    });
  };
});

//updates temp to fahrenheit
function convertToF() {
  temp = temp * 1.8 + 32;
  $('#temp').html(Math.round(temp) +
    "<a href='#' onclick='convertToC()'>&#8457</a>");
}

//updates temp to celsius
function convertToC() {
  temp = (temp - 32) / 1.8;
  $('#temp').html(Math.round(temp) +
    "<a href='#' onclick='convertToF()'>&#8451</a>");
}
