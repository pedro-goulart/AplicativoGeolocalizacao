document.addEventListener('DOMContentLoaded', function () {
    main();
});

function main(){
    posicao();
}

function posicao(){
    navigator.geolocation.getCurrentPosition(
        function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            
            getWeather(latitude,longitude);
    
            var latLong = new google.maps.LatLng(latitude, longitude);
            var mapOptions = {center: latLong, zoom:13};
            var map = new google.maps.Map(document.getElementById("map"),mapOptions);
            
            var marker = new google.maps.Marker({
                position: latLong,
                map: map,
                title: "Voce esta aqui"
            });
          }, 
        function() {
            alert('fuck');
        });
}

function getWeather(lat,long){
    var xhttp = new XMLHttpRequest();
    var link = 'https://api.openweathermap.org/data/2.5/weather';
    var pos = '?lat='+lat+'&lon='+long;
    var key = '&apikey=5c9e007cce182013a0b10daa27653375';
    var uni = '&units=metric';
    var lan = '&lang=pt';
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //alert(xhttp.responseText);
            preencheTela(xhttp.responseText);
        }
    };
    xhttp.open("GET", (link+pos+key+uni+lan), true);
    xhttp.send();
}

function preencheTela(jas){
    var obj = JSON.parse(jas);
    document.getElementById('ceu').innerHTML = obj.weather[0].description;
    document.getElementById('tem').innerHTML = obj.main.temp+'ºC  Min:'+obj.main.temp_min+'ºC Max:'+obj.main.temp_max+'ºC';
    document.getElementById('hum').innerHTML = 'Humidade de '+obj.main.humidity+'%';
    document.getElementById('ven').innerHTML = 'Ventos de '+(obj.wind.speed*3.6)+' km/h '+getCardinal(obj.wind.deg);
}

function getCardinal(angle) {
    var directions = 8;
        
    var degree = 360 / directions;
    angle = angle + degree/2;
        
        if (angle >= 0 * degree && angle < 1 * degree)
            return "Norte";
        if (angle >= 1 * degree && angle < 2 * degree)
            return "Nordeste";
        if (angle >= 2 * degree && angle < 3 * degree)
            return "Leste";
        if (angle >= 3 * degree && angle < 4 * degree)
            return "Sudeste";
        if (angle >= 4 * degree && angle < 5 * degree)
            return "Sul";
        if (angle >= 5 * degree && angle < 6 * degree)
            return "Sudoeste";
        if (angle >= 6 * degree && angle < 7 * degree)
            return "Oeste";
        if (angle >= 7 * degree && angle < 8 * degree)
            return "Noroeste";
    
    return "Norte";
}