//refined js
/* global navigator */
/* global $ */
/* global APIKEY */
/* global position */
/* global location*/


    var apiData  = "";
    var backgroundImg = ["image1", "image2"];
    var lat = 0;
    var lon = 0;
    var F = false;
    var C =


    $("#locationHere").click(function(){
       
        $.getJSON("//freegeoip.net/json/").done(function(location){
            var lat = location.latitude;
            var lon = location.longitude;
            console.log(location);
            $("#yourCity").html(location.city);
            $("#yourLatitude").html(lat);
            $("#yourLongitude").html(lon);
            console.log("the weather api call is about to happen");
        });
    });
    
    
    $("#weatherHere").click(function(){
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                console.log("Coordinates");
            
        
                    console.log("did the functions start?");
                    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&appid="+APIKEY).done(function(data){
                        console.log("did the data get logged?");
                        apiData = data;
                        console.log(data);
                        $("#yourDescription").html(data.weather[0].description);
                        $("#yourWind").html(data.wind.speed);
                        $("#yourTemp").html(data.main.temp + "\&deg\F");
                        
                    
                        $("#degreesToggle").click(function(){
                            var F = data.main.temp;
                            console.log(F);
                            var C = Math.round((F-32)*(5/9));
                            console.log(C);
                            
                            
                             $("#yourTemp").html(C);
                                 });
                             console.log("toggle");
                        
                        
                         });
                    });
        }
    });
    
 








