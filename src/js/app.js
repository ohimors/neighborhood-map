(function () {
   'use strict';
}());

// google maps api key: AIzaSyD9eCTT4nZW9OJ-zaUWAORaB8QcBdpyBzg

function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());