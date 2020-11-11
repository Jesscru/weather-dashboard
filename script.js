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
    $('.temp').text('Temperature: ' + tempF.toFixed());
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

    var day1 = response.list[2];
    var day2 = response.list[10];
    var day3 = response.list[18];
    var day4 = response.list[26];
    var day5 = response.list[34];

    for (var i = 3; i < response.list.length; i+=8) {
        var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
        var weatherIcon = "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png";

        $('.date1').text(day1.dt_txt[5] + day1.dt_txt[6] + '/' + day1.dt_txt[8] + day1.dt_txt[9] + '/' + day1.dt_txt[0] + day1.dt_txt[1]);
        $('.icon1').attr('src', weatherIcon);
        $('.temp1').text('Temperature: ' + tempF.toFixed());
        $('.humidity1').text('Humidity: ' + day1.main.humidity);
      
    
        $('.date2').text(day1.dt_txt[5] + day2.dt_txt[6] + '/' + day2.dt_txt[8] + day2.dt_txt[9] + '/' + day2.dt_txt[0] + day2.dt_txt[1]);
        $('.icon2').attr('src', weatherIcon);
        $('.temp2').text('Temperature: ' + tempF.toFixed())
        $('.humidity2').text('Humidity: ' + day2.main.humidity);
      
    
        $('.date3').text(day3.dt_txt[5] + day3.dt_txt[6] + '/' + day3.dt_txt[8] + day3.dt_txt[9] + '/' + day3.dt_txt[0] + day3.dt_txt[1]);
        $('.icon3').attr('src', weatherIcon);
        $('.temp3').text('Temperature: ' + tempF.toFixed())
        $('.humidity3').text('Humidity: ' + day3.main.humidity);
     
    
        $('.date4').text(day4.dt_txt[5] + day4.dt_txt[6] + '/' + day4.dt_txt[8] + day4.dt_txt[9] + '/' + day4.dt_txt[0] + day4.dt_txt[1]);
        $('.icon4').attr('src', weatherIcon);
        $('.temp4').text('Temperature: ' + tempF.toFixed()) 
        $('.humidity4').text('Humidity: ' + day4.main.humidity);
     
    
        $('.date5').text(day5.dt_txt[5] + day5.dt_txt[6] + '/' + day5.dt_txt[8] + day5.dt_txt[9] + '/' + day5.dt_txt[0] + day5.dt_txt[1]);
        $('.icon5').attr('src', weatherIcon);
        $('.temp5').text('Temperature: ' + tempF.toFixed()) 
        $('.humidity5').text('Humidity: ' + day5.main.humidity);


        console.log(weatherIcon);
        };
    })



// ajax call for the UV index API
// $.ajax ({
//     url: queryURL3,
//     method: 'GET'

// }).then(function(response, lat, lon){
//     console.log(response);
//     returnLatAndLon();
// })
