//openweathermap api requires the connection to be insecure due to the use of
//a free api key. for this page to load the weather info connect to it using
//http://
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=";
var locationUrl = "http://ip-api.com/json";
var apiKey = "c0b069518cfd9fe3d8093d9e91a529cd"
var weatherid = "";
var temp = "";

//fetches location and weather info from their respective apis and writes
//the appropriate info to the page
$(document).ready(function() {
  $.getJSON(locationUrl, function(location) {
    $.getJSON(weatherUrl + apiKey + "&lat=" + location.lat +
      "&lon=" + location.lon + "&units=metric",
      function(weather) {
        temp = Math.round(weather.main.temp);
        weatherid = weather.weather[0].icon;
        $('#cityName').html("<div class='row'>" + weather.name +
          "</div>");
        $('#temp').html(Math.round(weather.main.temp) +
          "<a href='#' onclick='convertToF()'>&#8451</a>");
        $('#description').html(weather.weather[0].description);
        switch (weatherid) {
          case "01d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/01d.png'>"
            );
            break;
          case "02d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/02d.png'>"
            );
            break;
          case "03d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/03d.png'>"
            );
            break;
          case "04d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/04d.png'>"
            );
            break;
          case "09d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/09d.png'>"
            );
            break;
          case "10d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/10d.png'>"
            );
            break;
          case "11d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/11d.png'>"
            );
            break;
          case "13d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/13d.png'>"
            );
            break;
          case "50d":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/50d.png'>"
            );
            break;
          case "01n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/01n.png'>"
            );
            break;
          case "02n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/02n.png'>"
            );
            break;
          case "03n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/03n.png'>"
            );
            break;
          case "04n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/04n.png'>"
            );
            break;
          case "09n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/09n.png'>"
            );
            break;
          case "10n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/10n.png'>"
            );
            break;
          case "11n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/11n.png'>"
            );
            break;
          case "13n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/13n.png'>"
            );
            break;
          case "50n":
            $("#icon").html(
              "<img src='http://openweathermap.org/img/w/50n.png'>"
            );
            break;
        }
      });
  });
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
