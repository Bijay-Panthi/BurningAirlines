var app = app || {};

app.AppView = Backbone.View.extend({
  el:'#app',

  initialize: function () {
    // this.collection = new app.Flights(flight);
    // this.render();
  },

  render: function () {

    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html( templateMarkup );

    var sv = new app.SearchView({
      collection: this.collection
    });
    sv.render();

    console.log('app view render function');
    this.collection.each(function (flight) {
      var flv = new app.FlightListView({
        model: flight
      });
      flv.render();

    });
  }
});

//
// Start with the AppView
//   When you create a new instance and render it
//   Get the #AppViewTemplate
//   Put it in the div#app
//
// Try and get that to happen using the Backbone Router








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
