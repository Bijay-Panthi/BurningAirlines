var app = app || {};

app.FlightListView = Backbone.View.extend({
    tagName: "li",

    events: {
      'click' : 'showFlight'
    },

    showFlight: function () {
      var id = this.model.get("id");
      app.router.navigate("/flights" + id, true);
    },

    render: function () {
      var flightNum = this.model.get("flight_num");

      this.$el.html( flightNum);
      this.$el.append( "#flights" );
    }
});
