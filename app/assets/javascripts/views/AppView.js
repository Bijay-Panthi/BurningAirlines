var app = app || {};

app.AppView = Backbone.View.extend({
  el:'#app',

  initialize: function (flight) {
    this.collection = new app.Flights(flight);
    this.render();
  },

  render: function () {

    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html( templateMarkup );

    this.collection.each(function (flight) {

      var flv = new app.FlightListView({
        model: flight
      });
      flv.render();

    });
  }
});











  // var flights = new app.Flights([
  //   {flight_number: 12345},
  //   {flight_number: 54321},
  //   {flight_number: 98765},
  // ]);
  //
  // var appView = new app.AppView({
  //   collection: flights
  // });
  // appView.render();
