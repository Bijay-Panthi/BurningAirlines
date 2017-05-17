var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    'airplanes' : 'index',
    'airplanes/:id' : 'showAirplane',

    'flights' : 'index',
    'flights/:id' : 'showFlight'
  },

  index: function () {
    var appView = new app.appView({
      collection: app.flights
    });
    appView.render();
  }
});
