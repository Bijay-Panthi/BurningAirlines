// Create the router
// Start Backbone history
var app = app || {};

app.flights = new app.Flight();
app.router = new app.AppRouter();

$(document).ready(function () {
  app.flights.fetch().done(function () {

    Backbone.history.start();

  });
});
