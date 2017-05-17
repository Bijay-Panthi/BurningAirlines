var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    'flights' : 'index',
    'flights/:id' : 'showFlight'
  },

  index: function () {
    // console.log("INDEX RUN");
    var appView = new app.AppView({

      collection: app.flights
    });
    appView.render();
  },

  showFlight: function (id) {
    var flight = app.flights.get(id);
    var flightView = new app.FlightView({
      model: flight
    });
    flightView.render();
  }
});
