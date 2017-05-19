var flights;
var app = app || {};

app.SearchView = Backbone.View.extend({
  el:'#search',

  events: {
    'click #submit': "searchFlights",
    'keyup input': "searchFlights"
  },

  searchFlights: function () {

    var origin = $('#origin').val().toLowerCase();
    var destination = $('#destination').val().toLowerCase();
    var list = $('li').text();

    this.collection = app.flights.filter(function (flight) {
      return flight.get("origin").toLowerCase().startsWith( origin )
        && flight.get("destination").toLowerCase().startsWith( destination );
    });
    this.render();

  },

  initialize: function () {
    console.log("RENDERED ");
  },

  render: function () {
    var search = this.model;
    var templateMarkup = $("#SearchViewTemplate").html();
    flights = this;
    if ( $("#searchView").length === 0 ) {
      this.$el.html(templateMarkup);
    }

    $("#flights").html('');
    flights.collection.forEach(function (flight) {
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



// events: {
//     'keydown' : 'search'
//   },
//
//   search: function(){
//     // console.log("key pressed");
//     var originSearch = $("#origin").val();
//     console.log(originSearch);
//     console.log(this.collection.toJSON());
//     // var filterFlights = this.collection.filter(function(flight){
//     //   return flight.get("origin").startsWith(originSearch);
//     // });
//     // this.collection = new app.Flights(filterFlights);
//     // this.render();
//   },
