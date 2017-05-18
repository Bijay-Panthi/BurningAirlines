var flights;
var app = app || {};

app.SearchView = Backbone.View.extend({
  el:'#search',

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
