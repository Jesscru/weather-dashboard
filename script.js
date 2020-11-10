var apiKey = "63c42ca33fcb2816693df995f648b2aa";
var city = 'Austin';
var cityInput = $('#cityInput').val().trim();
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

$.ajax ({
    url: queryURL,
    method: 'GET'

}).then(function(response){
    console.log(response);
    
})