var searchBtn = $('#searchBtn');
var apiKey = "63c42ca33fcb2816693df995f648b2aa";
var city = 'Austin';
var cityInput = $('#cityInput').val().trim();
var cityStats = $('#city-stats');
// url for current weather data 
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
// url for 5-day forecast
var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;
// url for UV index
// var queryURL3 = "https://http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

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
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;

    $('.card-title').text('In ' + response.name + ' today:');
    $('.temp').text('Temperature: ' + tempF.toFixed(2));
    $('.humidity').text('Humidity: ' + response.main.humidity);
    $('.wind').text('Wind Speed: ' + response.wind.speed);
    $('.description').text('Description: ' + response.weather[0].description);

    // function returnLatAndLon(){
    //     var lat = response.coord.lat;
    //     var lon = response.coord.lon;
    //     return lat, lon;
    // }
})

// ajax call for the 5-day forecast API
$.ajax ({
    url: queryURL2,
    method: 'GET'

}).then(function(response){
    console.log(response);

    var day1 = response.list[3];
    var day2 = response.list[11];
    var day3 = response.list[19];
    var day4 = response.list[27];
    var day5 = response.list[35];
    // var weatherIcon = "http://openweathermap.org/img/w/" + response.list.weather[0].icon + ".png";

    var oneDay = $('<div class="day">');
    var twoDay = $('<div class="day">');
    var threeDay = $('<div class="day">');
    var fourDay = $('<div class="day">');
    var fiveDay = $('<div class="day">');

    oneDay.text(day1.dt_txt[5] + day1.dt_txt[6] + '/' + day1.dt_txt[8] + day1.dt_txt[9] + '/' + day1.dt_txt[0] + day1.dt_txt[1] + '\n Temperature: ' + day1.main.temp + '\n Humidity: ' + day1.main.humidity);
    $('.forecast').append(oneDay);

})


// ajax call for the UV index API
// $.ajax ({
//     url: queryURL3,
//     method: 'GET'

// }).then(function(response, lat, lon){
//     console.log(response);
//     returnLatAndLon();
// })
