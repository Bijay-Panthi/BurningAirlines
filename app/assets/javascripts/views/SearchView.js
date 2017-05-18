var flights;
var app = app || {};

app.SearchView = Backbone.View.extend({
  el:'#search',

  events: {
    'click': "searchFlights",
  },

  searchFlights: function () {

    var origin = $('#origin').val();

    var searchResult = [];
    // var search = function (origin) {
    //   console.log(origin);
    // };


    console.log(origin);
  },


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
