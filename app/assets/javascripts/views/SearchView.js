var flights;
var app = app || {};

app.SearchView = Backbone.View.extend({
  el:'#search',

  // events: {
  //   'click': "searchFlights",
  //
  // },
  //
  // searchFlights: function () {
  //   // console.log("search button has been clicked");
  //   var origin = $('#origin').val();
  //
  //   console.log(origin);
  //
  //
  //   // How to get the origin and destination
  //   // Change the return statement in the filter
  //   var matchedFlights = this.collection.filter(function (flight) {
  //     return flight.get("origin").startsWith(origin);
  //   });
  //   // debugger;
  //   this.collection = new app.Flights(matchedFlights);
  //   this.render();
  // },


  render: function () {
    var search = this.model;
    var templateMarkup = $("#SearchViewTemplate").html();
    flights = this;
    this.$el.append(templateMarkup);

    flights.collection.each(function (flight) {
      // debugger
      console.log('search view this');
      var fv = new app.FlightListView({
        model: flight
      });
      fv.render();
    // A list of all flights
      // ITerate through each one
        // Pass a single flight and render a FlightListView
    });
  }
});
