var app = app || {};

app.FlightListView = Backbone.View.extend({
    tagName: "li",

    render: function () {
        var msg = "Origin: " + this.model.get("origin");
        msg += ". Destination: " + this.model.get("destination");
        // debugger;
        console.log( this.model.toJSON() );
      var flightList = this.model.get("flight_number");
      this.$el.html( msg );
      this.$el.appendTo("#flights");

    }
});
