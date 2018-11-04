document.addEventListener('DOMContentLoaded', function () {
    main();
    posicao();
});

function main(){
    alert('what')
}

function posicao(){
    navigator.geolocation.getCurrentPosition(
        function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
    
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