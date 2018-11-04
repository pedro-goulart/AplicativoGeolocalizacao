var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    onSuccess: function(position) {
        /*var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        var latLong = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {center: latLong, zoom:13,mapTypeId:google.maps.MyTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        */
    },

    onError: function(error) {
//        alert('code: '    + error.code    + '\n' +
//              'message: ' + error.message + '\n');
    }
};

app.initialize();