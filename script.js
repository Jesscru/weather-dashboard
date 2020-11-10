var searchBtn = $('#searchBtn');
var apiKey = "63c42ca33fcb2816693df995f648b2aa";
var city = 'Austin';
var cityInput = $('#cityInput').val().trim();
// url for current weather data 
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
// url for 5-day forecast
var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

// searchBtn.on('click', function(event){
//     event.preventDefault();

//     var listCity = $('<li>');
//     listCity.text(cityInput);
//     listCity.append($('.ul'));
//     console.log(cityInput);
// })


// ajax call for the current weather data API
$.ajax ({
    url: queryURL,
    method: 'GET'

}).then(function(response){
    console.log(response);

    var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    $('.card-title').text(response.name);
    $('.temp').text('Temperature: ' + tempF.toFixed(2));
    $('.humidity').text('Humidity: ' + response.main.humidity);
    $('.wind').text('Wind Speed: ' + response.wind.speed);
    $('.description').text('Description: ' + response.weather[0].description);

})

// ajax call for the 5-day forecast API
$.ajax ({
    url: queryURL2,
    method: 'GET'

}).then(function(response){
    // console.log(response);

})


