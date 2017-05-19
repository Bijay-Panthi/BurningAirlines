var app = app || {};

app.FlightListView = Backbone.View.extend({
  tagName: "li",

  events: {
    'click': 'showFlight'
  },

  showFlight: function() {
    var id = this.model.get('id');
    app.router.navigate('flights/' + id, true);
  },

  render: function() {
    console.log("RENDER");
    var msg = "Origin: " + this.model.get("origin");
    msg += ". Destination: " + this.model.get("destination");
    var flightList = this.model.get("fligh_number");
    this.$el.html(msg);
    this.$el.appendTo("#flights");
  }

});

//
// showFlight: function () {
// var flightNumber = this.model.get("flight_number");
// app.router.navigate("/flights/" + flightyNumber, true);
// // this will redirect us to the page of the single flight
