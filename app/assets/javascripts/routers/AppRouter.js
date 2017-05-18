var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    'flights' : 'index',
    'flights/:id' : 'showFlight'
  },

  index: function () {
    console.log('index function');
    var appView = new app.AppView({
      collection: app.flights
    });
    appView.render();

    // var searchView = new app.SearchView({
    //   collection: app.flights
    // });
    // searchView.render();
    // var searchView
  },

  showFlight: function (id) {
    console.log('show function');
    var appView = new app.AppView({
      collection: app.flights
    });
    appView.render();

    var flight = app.flights.get(id);

    var flightsView = new app.FlightView({
      model: flight
    });
    flightsView.render();
  }
});
