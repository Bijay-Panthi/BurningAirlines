var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",

  model: app.Flight,

  initialize: function () {
    this.on('add', function (flight) {

      var flightView = new app.FlightView({
        model: flight
      });
      flightView.render();
    });
  }
});
var flightsCollection = new app.Flights();

flightsCollection.fetch().done(function () {
  flightsCollection.each(function (flight) {
  });
});


// app.Flights = Backbone.Collection.extend({
//   url: '/flights',
//
//   model: app.Flight,
//
//   initialize: function () {
//
//     this.on('add', function (flight) {
//       var flightNumber = flight.get('flight_number');
//     });
//   }
// });
//
// var flightsCollection = new app.Flights();
//
// flightsCollection.fetch().done(function () {
//
//   // console.log( postsCollection.length );
//
//   flightsCollection.each(function ( flight ) {
//     var number = flight.get("flight_number");
//   });
//
// });
