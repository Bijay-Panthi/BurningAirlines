var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: '/flights',

  model: app.Flight,

  initialize: function () {

    this.on('add', function (flight) {
      var flightNumber = flight.get('flight_number');
    });
  }
});

var flightsCollection = new app.Flights();
