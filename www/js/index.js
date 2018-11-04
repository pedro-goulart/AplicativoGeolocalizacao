/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    onSuccess: function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        alert('aaaa');
    
        var latLong = new google.maps.LatLng(latitude, longitude);
        var mapOptions = {center: latLong, zoom:13,mapTypeId:google.maps.MyTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        
        /*map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: latitude, lng: longitude},
            zoom: 8
        });*/
        
    },

    onError: function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
};

app.initialize();