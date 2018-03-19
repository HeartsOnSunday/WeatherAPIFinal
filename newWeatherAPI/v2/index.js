/* global navigator */
/* global $ */
/* global APIKEY */
/* global position */
/* global location*/

$(function(){
   // var C = false;
    var apiData;
    var backgroundImg = ["image1", "image2",];
    
    function displayTemp (F,C){
        var C = 0;
        var F = 0;
        if(C) return Math.round((F-32)*(5/9)) + '&deg; C';
        console.log(Math.round(F) + '&deg; F');
        console.log(C);
        console.log(F);
    }
    
//
    $("#locationHere").click(function(){
        $.getJSON('//freegeoip.net/json/').done(function(location){
            console.log(location);
            $('#yourCity').html(location.city);
            $('#yourLatitude').html(location.latitude);
            $('#yourLongitude').html(location.longitude);
            console.log('the weather api call is about to happen');
        });
    });
    
    $("#weatherHere").click(function(){
        console.log("did the functions start?");
        $.getJSON('https://api.openweathermap.org/data/2.5/weather?lat='
        +location.latitude+'&lon='
        +location.longitude+'&units=imperial&appid='+APIKEY, 
        function(data){
            apiData = data;
            console.log(data);
            $('#yourDescription').html(data.weather[0].description);
            $('#yourWind').html(data.wind.speed);
            $('#yourTemp').html(data.main.temp + '\&deg\F');
        });
        });
    });
    
    













